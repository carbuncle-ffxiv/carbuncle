import { NextFunction, Request, Response } from 'express';

export const checkAuth = (token?: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    token = token || process.env.API_TOKEN;
    if (req.headers.authorization !== token) {
      res.sendStatus(401);
      return;
    }
    next();
  };
};
