import {
  AutocompleteInteraction,
  CacheType,
  ChatInputCommandInteraction,
  InteractionResponse,
  Message,
  RESTPostAPIApplicationCommandsJSONBody,
  StringSelectMenuInteraction,
} from 'discord.js';

export abstract class Interaction implements InteractionInterface {
  readonly enabled: boolean = true;
  readonly category: InteractionCategory;
  readonly command: RESTPostAPIApplicationCommandsJSONBody;

  async run(
    interaction: ChatInputCommandInteraction<CacheType>
  ): Promise<InteractionResponse<boolean> | Message<boolean>> {
    throw new Error(`Command ${this.command.name} not implemented.`);
  }

  async autocomplete?(interaction: AutocompleteInteraction<CacheType>): Promise<void> {}

  async selectMenu?(interaction: StringSelectMenuInteraction<CacheType>): Promise<any> {}
}

export enum InteractionCategory {
  FFXIV = 'Final Fantasy XIV',
  GENERAL = 'General',
  CONFIGURATION = 'Configuration',
}

export interface InteractionInterface {
  readonly enabled: boolean;
  readonly category: InteractionCategory;
  readonly command: RESTPostAPIApplicationCommandsJSONBody;
  run(interaction: ChatInputCommandInteraction<CacheType>): Promise<InteractionResponse<boolean> | Message<boolean>>;
  autocomplete?(interaction: AutocompleteInteraction<CacheType>): Promise<void>;
  selectMenu?(interaction: StringSelectMenuInteraction<CacheType>): Promise<any>;
}
