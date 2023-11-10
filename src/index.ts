import dotenv from 'dotenv';

import { ShardingManager } from 'discord.js';

import { Manager } from './structures/Manager.js';

import { API } from './api/index.js';
import { ShardController } from './api/controllers/index.js';

import { logger } from './utils/Logger.js';
import { getFilePath } from './utils/File.js';

dotenv.config();

const shardManager = new ShardingManager(getFilePath('Bot.js'), {
  token: process.env.TOKEN,
  totalShards: 'auto',
  respawn: true,
});

const manager = new Manager(shardManager);

const shardController = new ShardController(shardManager);

const api = new API([shardController]);

(async () => {
  try {
    await manager.start();
    api.start();
  } catch (error) {
    logger.error('Error starting the manager:', error);
  }
})();

process.on('SIGINT', () => {
  manager.shutdown();
  process.exit(0);
});
