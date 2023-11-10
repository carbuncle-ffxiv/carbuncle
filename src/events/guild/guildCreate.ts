import { Events } from 'discord.js';
import { inject, injectable } from 'tsyringe';

import { Event } from '../../structures/Event.js';
import { Client } from '../../structures/Client.js';

import { clientSymbol } from '../../utils/Commons.js';

@injectable()
export default class GuildCreate extends Event {
  constructor(@inject(clientSymbol) private client: Client) {
    super('onGuildCreate', Events.GuildCreate);
  }

  public async run(...args: any[]): Promise<void> {}
}
