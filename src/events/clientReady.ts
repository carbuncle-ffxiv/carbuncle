import { Events } from 'discord.js';
import { inject, injectable } from 'tsyringe';

import { Event } from '../structures/Event.js';
import { Client } from '../structures/Client.js';

import { logger } from '../utils/Logger.js';
import { clientSymbol } from '../utils/Commons.js';

@injectable()
export default class ClientReady extends Event {
  constructor(@inject(clientSymbol) private client: Client) {
    super('onReady', Events.ClientReady, true);
  }

  public async run(): Promise<void> {
    logger.info(
      `${this.client.user?.tag}, ready to serve ${this.client.guilds.cache.size} servers on shard #${this.client.shard?.ids[0]}`,
    );
  }
}
