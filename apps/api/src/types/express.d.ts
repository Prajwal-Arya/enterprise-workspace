export {};

declare global {
  namespace Express {
    interface Request {
      traceId: string;
      requestStartTime: number;
    }
  }
}
