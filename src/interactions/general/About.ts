import {
  ApplicationCommandType,
  CacheType,
  ChatInputCommandInteraction,
  InteractionResponse,
  Message,
  RESTPostAPIChatInputApplicationCommandsJSONBody,
} from 'discord.js';

import { injectable, inject } from 'tsyringe';

import {
  Interaction,
  InteractionCategory,
} from '../../structures/Interaction.js';
import { Client } from '../../structures/Client.js';

import { clientSymbol } from '../../utils/Commons.js';

import { AboutEmbed } from '../../embeds/AboutEmbed.js';

@injectable()
export default class Help extends Interaction {
  public enabled = true;

  public category = InteractionCategory.GENERAL;

  public command: RESTPostAPIChatInputApplicationCommandsJSONBody = {
    type: ApplicationCommandType.ChatInput,
    name: 'about',
    description: 'Displays information about Carbuncle',
  };

  constructor(@inject(clientSymbol) private client: Client) {
    super();
  }

  public async run(
    interaction: ChatInputCommandInteraction<CacheType>,
  ): Promise<InteractionResponse<boolean> | Message<boolean>> {
    const guilds = await this.client.shard?.broadcastEval(
      (client) => client.guilds.cache.size,
    );
    const users = await this.client.shard?.broadcastEval((client) =>
      client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0),
    );

    const data = {
      guilds: guilds?.reduce((acc, guildCount) => acc + guildCount, 0),
      users: users?.reduce((acc, memberCount) => acc + memberCount, 0),
      shardId: interaction.guild?.shardId || 0,
    };

    const embed = new AboutEmbed(data);

    return await interaction.reply({
      embeds: [embed],
      //   components: [helpersButtons],
    });
  }
}
