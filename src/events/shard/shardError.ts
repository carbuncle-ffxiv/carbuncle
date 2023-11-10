import { Events } from 'discord.js';
import { inject, injectable } from 'tsyringe';

import { Event } from '../../structures/Event.js';
import { Client } from '../../structures/Client.js';

import { clientSymbol } from '../../utils/Commons.js';
import { logger } from '../../utils/Logger.js';

@injectable()
export default class ShardError extends Event {
  constructor(@inject(clientSymbol) private client: Client) {
    super('onShardDisconnect', Events.ShardError);
  }

  public async run(error: Error, id: number): Promise<void> {
    logger.warn(`[Shard #${id}] ${error.stack}`);
  }
}
