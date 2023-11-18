import { CacheType, CommandInteraction, Events } from 'discord.js';
import { inject, injectable } from 'tsyringe';

import { Event } from '../structures/Event.js';
import { Client } from '../structures/Client.js';

import { clientSymbol } from '../utils/Commons.js';

@injectable()
export default class InteractionCreate extends Event {
  constructor(@inject(clientSymbol) private client: Client) {
    super('onInteractionCreate', Events.InteractionCreate);
  }

  public async run(interaction: CommandInteraction<CacheType>): Promise<void> {
    if (!interaction || !this.client.isReady()) return undefined;

    const command = this.client.interactions.get(interaction.commandName);

    if (!command) return undefined;

    if (interaction.isChatInputCommand()) {
      try {
        await command?.run(interaction);
        this.client.logger.info(`Command "${command.command.name}" has been executed`);
      } catch (error) {
        this.client.logger.error(error);
        await interaction.reply({
          content: 'There was an error while executing this command! Please try again later.',
          ephemeral: true,
        });
      }
    } else if (interaction.isAutocomplete()) {
      try {
        await command?.autocomplete?.(interaction);
      } catch (error) {
        this.client.logger.error(error);
      }
    }
  }
}
