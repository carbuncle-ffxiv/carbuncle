import {
  ApplicationCommandType,
  CacheType,
  ChatInputCommandInteraction,
  InteractionResponse,
  Message,
  RESTPostAPIApplicationCommandsJSONBody,
} from 'discord.js';

import { injectable, inject } from 'tsyringe';

import { Interaction, InteractionCategory } from '../../structures/Interaction.js';
import { Client } from '../../structures/Client.js';

import { clientSymbol } from '../../utils/Commons.js';

import { AboutEmbed } from '../../embeds/AboutEmbed.js';

@injectable()
export default class About extends Interaction {
  public enabled = true;

  public category = InteractionCategory.GENERAL;

  public command: RESTPostAPIApplicationCommandsJSONBody = {
    type: ApplicationCommandType.ChatInput,
    name: 'about',
    description: 'Displays information about Carbuncle',
  };

  constructor(@inject(clientSymbol) private client: Client) {
    super();
  }

  public async run(
    interaction: ChatInputCommandInteraction<CacheType>
  ): Promise<InteractionResponse<boolean> | Message<boolean>> {
    const data = await this.client.shard?.broadcastEval((client) => [
      client.guilds.cache.size,
      client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0),
      client.ws.shards.first()?.id,
    ]);

    const payload = {
      servers: data?.[0]?.[0],
      users: data?.[0]?.[1],
      shardId: data?.[0]?.[2],
    };

    const embed = new AboutEmbed(payload);

    return await interaction.reply({
      embeds: [embed],
    });
  }
}
