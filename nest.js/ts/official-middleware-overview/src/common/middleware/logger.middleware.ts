import { HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(`Middleware 실행`);
    console.log(`Middleware req: ${JSON.stringify(req.body)}`);

    if (!req.headers.authorization) {
      res
        .status(HttpStatus.UNAUTHORIZED)
        .json({ errMessage: 'AccessToken이 제공되지 않았습니다.' });
      return;
    }

    next();
  }
}
