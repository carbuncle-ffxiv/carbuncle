import 'dotenv/config';

import { ShardingManager } from 'discord.js';

import { Manager } from './structures/Manager.js';

import { API } from './api/API.js';
import { ShardController } from './api/controllers/ShardController.js';
import { RootController } from './api/controllers/RootController.js';

import { logger } from './utils/Logger.js';
import { getFilePath } from './utils/File.js';

const shardManager = new ShardingManager(getFilePath('Bot.js'), {
  token: process.env.TOKEN,
  totalShards: 'auto',
  respawn: true,
});

const manager = new Manager(shardManager);

const rootController = new RootController();
const shardController = new ShardController(shardManager);

const api = new API([rootController, shardController]);

(async () => {
  try {
    await manager.start();
    api.start();
  } catch (error) {
    logger.error('Error starting the manager:', error);
  }
})();

process.on('SIGINT', () => {
  logger.info('Stopping the manager...');
  manager.shutdown();
  process.exit(0);
});
