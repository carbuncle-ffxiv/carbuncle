import express, { Express } from 'express';

import { logger } from '../utils/Logger.js';

import { Controller } from './controllers/Controller.js';

export class API {
  private app: Express;

  private controllers: Controller[];

  constructor(controllers: Controller[]) {
    this.app = express();
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.controllers = controllers;
  }

  /**
   * Start the express application.
   * @returns {void}
   */
  public start(): void {
    this.registerControllers();

    const port = process.env.PORT || 3000;

    this.app.listen(port, () => {
      logger.info(`API is listening on port ${port}`);
    });
  }

  /**
   * Register the controllers.
   * @returns {void}
   */
  private registerControllers(): void {
    for (const controller of this.controllers) {
      //   if (controller.authToken) {
      //     controller.router.use(checkAuth(process.env.AUTH_TOKEN));
      //   }
      controller.register();
      this.app.use(controller.path, controller.router);
    }
  }
}
