import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class HttpLoggingMiddleware implements NestMiddleware {
  private readonly logger = new Logger(HttpLoggingMiddleware.name);

  use(req: Request, res: Response, next: NextFunction): void {
    let logged = false;

    const writeLog = (event: 'finish' | 'close'): void => {
      if (logged) {
        return;
      }

      logged = true;

      const durationMs = Number(
        (performance.now() - req.requestStartTime).toFixed(2),
      );

      const logEntry = {
        event:
          event === 'finish' ? 'http_request_completed' : 'http_request_closed',
        traceId: req.traceId,
        method: req.method,
        path: req.originalUrl,
        statusCode: res.statusCode,
        durationMs,
        clientIp: req.ip,
        userAgent: req.get('user-agent') ?? null,
      };

      if (res.statusCode >= 500) {
        this.logger.error(logEntry);
        return;
      }

      if (res.statusCode >= 400) {
        this.logger.warn(logEntry);
        return;
      }

      this.logger.log(logEntry);
    };

    res.once('finish', () => writeLog('finish'));
    res.once('close', () => writeLog('close'));

    next();
  }
}
