import { Request, Response, Router } from 'express';
import { ShardingManager } from 'discord.js';

import { Controller } from './Controller.js';

export class ShardController implements Controller {
  public path = '/shards';

  public router = Router();

  public secure = true;

  private manager: ShardingManager;

  public constructor(manager: ShardingManager) {
    this.manager = manager;
  }

  public register(): void {
    this.router.get('/', this.getShards.bind(this));
  }

  private async getShards(req: Request, res: Response): Promise<void> {
    if (!this.manager.shards.size) {
      res.status(503).json({
        error: 'Shards are not ready',
      });
      return;
    }

    const shards = await this.manager.broadcastEval((client) => [
      client.ws.shards.first()?.id,
      client.ws.status,
      client.ws.ping,
      client.guilds.cache.map((guild) => guild.id),
      client.uptime,
    ]);

    res.status(200).json(shards);
  }
}
