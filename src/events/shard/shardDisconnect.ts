import { Events } from 'discord.js';
import { inject, injectable } from 'tsyringe';

import { Event } from '../../structures/Event.js';
import { Client } from '../../structures/Client.js';

import { clientSymbol } from '../../utils/Commons.js';

@injectable()
export default class ShardDisconnect extends Event {
  constructor(@inject(clientSymbol) private client: Client) {
    super('onShardDisconnect', Events.ShardDisconnect);
  }

  public async run(event: CloseEvent, id: number): Promise<void> {
    this.client.logger.warn(`[Shard #${id}] Code ${event.code}, ${event.reason}`);
  }
}
