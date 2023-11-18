import { Events } from 'discord.js';
import { inject, injectable } from 'tsyringe';

import { Event } from '../structures/Event.js';
import { Client } from '../structures/Client.js';

import { clientSymbol } from '../utils/Commons.js';

@injectable()
export default class Warn extends Event {
  constructor(@inject(clientSymbol) private client: Client) {
    super('onWarn', Events.Warn);
  }

  public async run(message: string): Promise<void> {
    if (!message.match(/heartbeat/gi)) this.client.logger.debug(message);
  }
}
