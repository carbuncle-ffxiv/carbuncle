import { Events } from 'discord.js';
import { inject, injectable } from 'tsyringe';

import { Event } from '../../structures/Event.js';
import { Client } from '../../structures/Client.js';

import { clientSymbol } from '../../utils/Commons.js';
import { logger } from '../../utils/Logger.js';

@injectable()
export default class ShardReady extends Event {
  constructor(@inject(clientSymbol) private client: Client) {
    super('onShardReady', Events.ShardReady);
  }

  public async run(id: number): Promise<void> {
    logger.info(`Shard #${id} ready!`);
  }
}
