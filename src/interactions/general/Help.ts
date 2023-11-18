import {
  ApplicationCommandOptionType,
  ApplicationCommandType,
  AutocompleteInteraction,
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

import { HelpEmbed } from '../../embeds/HelpEmbed.js';
import { BaseEmbed } from '../../embeds/BaseEmbed.js';
import L from '../../i18n/i18n-node.js';

@injectable()
export default class Help extends Interaction {
  public enabled = true;

  public category = InteractionCategory.GENERAL;

  public command: RESTPostAPIApplicationCommandsJSONBody = {
    type: ApplicationCommandType.ChatInput,
    name: 'help',
    description: 'Shows the help menu',
    options: [
      {
        name: 'command',
        description: 'The command you want to get help with',
        type: ApplicationCommandOptionType.String,
        autocomplete: true,
        required: false,
      },
    ],
  };

  constructor(@inject(clientSymbol) private client: Client) {
    super();
  }

  public async run(
    interaction: ChatInputCommandInteraction<CacheType>
  ): Promise<InteractionResponse<boolean> | Message<boolean>> {
    const command = interaction.options.getString('command')?.toLowerCase();

    let embed: BaseEmbed;

    if (!command) {
      embed = new HelpEmbed(undefined, this.client.interactions);
    } else {
      const commands = await this.client.application?.commands.fetch();
      const applicationCommand = commands?.find((c) => c.name === command);
      if (!applicationCommand)
        return interaction.reply({
          content: L.en.commands.help.commandNotFound(),
          ephemeral: true,
        });

      embed = new HelpEmbed(applicationCommand, undefined);
    }

    return interaction.reply({
      embeds: [embed],
    });
  }

  public async autocomplete(interaction: AutocompleteInteraction<CacheType>): Promise<void> {
    const command = interaction.options.getString('command');

    let interactions = this.client.interactions;

    if (!command)
      return interaction.respond(
        interactions.map((interaction) => {
          return {
            name: interaction.command.name,
            value: interaction.command.name,
          };
        })
      );

    const regex = new RegExp(`^${command}`, 'i');

    interactions = interactions.filter((interaction) => regex.test(interaction.command.name));

    return interaction.respond(
      interactions.map((interaction) => {
        return {
          name: interaction.command.name,
          value: interaction.command.name,
        };
      })
    );
  }
}
