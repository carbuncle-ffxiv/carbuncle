import { container } from 'tsyringe';
import { EmbedBuilder } from 'discord.js';

import { Client } from '../structures/Client.js';

import { clientSymbol } from '../utils/Commons.js';

export class BaseEmbed extends EmbedBuilder {
  protected client: Client;

  constructor() {
    super();

    this.client = container.resolve<Client>(clientSymbol);

    this.data.color = 0xc15149;
  }

  public addField(name: string, value: string, inline = false): this {
    return super.addFields({
      name,
      value,
      inline,
    });
  }
}
