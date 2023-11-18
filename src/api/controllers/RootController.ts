import { Request, Response, Router } from 'express';

import { Controller } from './Controller.js';

export class RootController implements Controller {
  public path = '/';

  public router = Router();

  public secure = true;

  public register(): void {
    this.router.get('/', this.getIndex.bind(this));
  }

  private async getIndex(_req: Request, res: Response): Promise<void> {
    res.status(200).json({
      message: 'nothing to see here',
    });
  }
}
