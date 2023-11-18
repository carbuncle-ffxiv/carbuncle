import { Router } from 'express';

export interface Controller {
  path: string;
  router: Router;
  secure?: boolean;
  register: () => void;
}
