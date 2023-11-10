import { inject, injectable } from 'tsyringe';
import { Events } from 'discord.js';

import { Event } from '../../structures/Event.js';
import { Client } from '../../structures/Client.js';

import { clientSymbol } from '../../utils/Commons.js';

@injectable()
export default class GuildDelete extends Event {
  constructor(@inject(clientSymbol) private client: Client) {
    super('onGuildDelete', Events.GuildDelete);
  }

  public async run(...args: any[]): Promise<void> {}
}
