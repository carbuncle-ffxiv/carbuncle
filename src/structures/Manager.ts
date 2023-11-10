import { ShardingManager } from 'discord.js';

import { logger } from '../utils/Logger.js';

export class Manager {
  private manager: ShardingManager;

  constructor(manager: ShardingManager) {
    this.manager = manager;
  }

  public async start(): Promise<void> {
    this.registerEvents();
    await this.manager.spawn({
      timeout: -1,
    });
  }

  public shutdown(): void {
    this.manager.broadcastEval((client) => client.destroy());
  }

  private registerEvents(): void {
    this.manager.on('shardCreate', (shard) => {
      logger.info(`Launched shard #${shard.id}`);
    });
  }
}
