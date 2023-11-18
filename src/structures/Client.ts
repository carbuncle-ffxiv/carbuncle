import { ClientOptions, Collection, REST, Routes, Client as DiscordClient } from 'discord.js';
import { container } from 'tsyringe';
import { Logger } from 'pino';

import { Interaction } from './Interaction.js';
import { Event } from './Event.js';

import { createLogger } from '../utils/Logger.js';
import { clientSymbol } from '../utils/Commons.js';
import { getFilePaths, importFile } from '../utils/File.js';

export class Client extends DiscordClient {
  public logger: Logger;

  public interactions: Collection<string, Interaction> = new Collection();

  constructor(options: ClientOptions) {
    super(options);

    container.registerInstance(clientSymbol, this);

    this.logger = createLogger(`SHARD ${this.shard?.ids[0] ?? 0}`);
  }

  public async init(): Promise<void> {
    await this.registerInteractions();
    await this.registerEvents();
    await this.login(process.env.TOKEN);
    await this.registerCommands();
  }

  private async registerInteractions(): Promise<void> {
    const filePaths = getFilePaths('interactions/**/*.js');

    for (const filePath of filePaths) {
      const file = await importFile(filePath);
      const interaction = container.resolve<Interaction>(file);

      this.logger.info(`Loaded interaction ${interaction.command.name} from ${interaction.category}`);

      this.interactions.set(interaction.command.name, interaction);
    }
  }

  private async registerEvents(): Promise<void> {
    const filePaths = getFilePaths('events/**/*.js');

    for (const filePath of filePaths) {
      const file = await importFile(filePath);
      const event = container.resolve<Event>(file);

      this.logger.info(`Loaded event ${event.id}`);

      if (event.once) this.once(event.event, (...args) => event.run(...args));
      else this.on(event.event, (...args) => event.run(...args));
    }
  }

  private async registerCommands(): Promise<void> {
    const rest = new REST().setToken(process.env.TOKEN);

    try {
      this.logger.info(`Started refreshing ${this.interactions.size} application (/) commands.`);

      const body = this.interactions.map((interaction) => interaction.command);

      await rest.put(Routes.applicationCommands(this.application?.id as string), {
        body,
      });

      this.logger.info(`Successfully reloaded ${this.interactions.size} application (/) commands.`);
    } catch (error) {
      this.logger.error(error);
    }
  }
}
