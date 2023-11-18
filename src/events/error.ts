import { Events } from 'discord.js';
import { inject, injectable } from 'tsyringe';

import { Event } from '../structures/Event.js';
import { Client } from '../structures/Client.js';

import { clientSymbol } from '../utils/Commons.js';

@injectable()
export default class Error extends Event {
  constructor(@inject(clientSymbol) private client: Client) {
    super('onWarn', Events.Error);
  }

  public async run(error: Error): Promise<void> {
    this.client.logger.error(error);
  }
}
