import { ApplicationCommand, Collection, GuildResolvable } from 'discord.js';

import { BaseEmbed } from './BaseEmbed.js';

import { Interaction } from '../structures/Interaction.js';

import { titleCase } from '../utils/Commons.js';

import L from '../i18n/i18n-node.js';

export class HelpEmbed extends BaseEmbed {
  constructor(
    command?: ApplicationCommand<{
      guild: GuildResolvable | null;
    }>,
    commands?: Collection<string, Interaction>
  ) {
    super();

    if (command) {
      this.data.author = {
        name: L.en.embeds.help.information({
          name: titleCase(command.name),
        }),
        icon_url: this.client.user?.displayAvatarURL(),
      };

      this.data.description = command.description;

      this.addFields(
        command.options?.map((option) => ({
          name: option.name,
          value: option.description,
        }))
      );
    } else if (commands) {
      const categories = [...new Set(commands.map((command) => command.category))];

      this.data.author = {
        name: L.en.embeds.help.author({
          username: this.client.user!.username,
        }),
        icon_url: this.client.user?.displayAvatarURL(),
      };

      this.data.description = L.en.embeds.help.description();

      for (const category of categories) {
        const commandsInCategory = commands.filter((command) => command.category === category);
        this.addFields({
          name: category,
          value: commandsInCategory.map((command) => `\`${command.command.name}\``).join(', '),
        });
      }
    }
  }
}
