import { Injectable, NestMiddleware } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { NextFunction, Request, Response } from 'express';

const TRACE_ID_PATTERN = /^[A-Za-z0-9._:-]{1,128}$/;

@Injectable()
export class RequestContextMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction): void {
    const incomingTraceId = req.header('x-trace-id');

    const traceId =
      incomingTraceId && TRACE_ID_PATTERN.test(incomingTraceId)
        ? incomingTraceId
        : randomUUID();

    req.traceId = traceId;
    req.requestStartTime = performance.now();

    res.setHeader('X-Trace-Id', traceId);

    next();
  }
}
