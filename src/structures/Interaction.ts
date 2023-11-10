import {
  AutocompleteInteraction,
  CacheType,
  ChatInputCommandInteraction,
  InteractionResponse,
  Message,
  RESTPostAPIChatInputApplicationCommandsJSONBody,
  StringSelectMenuInteraction,
} from 'discord.js';

export abstract class Interaction implements InteractionInterface {
  /**
   * Whether the interaction is enabled.
   * @type {boolean}
   */
  public readonly enabled: boolean = true;

  /**
   * The interaction category.
   */
  public readonly category: InteractionCategory;

  /**
   * The command data.
   * @type {ApplicationCommandData}
   */
  public readonly command: RESTPostAPIChatInputApplicationCommandsJSONBody;

  /**
   * Runs the interaction.
   *
   * @param interaction - The interaction.
   * @param context - The context.
   *
   * @returns {Promise<void>}
   */
  public async run(
    interaction: ChatInputCommandInteraction<CacheType>,
  ): Promise<InteractionResponse<boolean> | Message<boolean>> {
    throw new Error(`Command ${this.command.name} not implemented.`);
  }

  /**
   * Handles the interaction autocomplete.
   *
   * @param interaction - The interaction.
   * @param context - The context.
   */
  public async autocomplete?(
    interaction: AutocompleteInteraction<CacheType>,
  ): Promise<void> {}

  /**
   * Handles the interaction select menu.
   *
   * @param interaction - The interaction.
   * @param context - The context.
   */
  public async selectMenu?(
    interaction: StringSelectMenuInteraction<CacheType>,
  ): Promise<any> {}
}

export enum InteractionCategory {
  FFXIV = 'Final Fantasy XIV',
  GENERAL = 'General',
  CONFIGURATION = 'Configuration',
}

export interface InteractionInterface {
  enabled: boolean;
  category: InteractionCategory;
  command: RESTPostAPIChatInputApplicationCommandsJSONBody;
  run(
    interaction: ChatInputCommandInteraction<CacheType>,
  ): Promise<InteractionResponse<boolean> | Message<boolean>>;
  autocomplete?(interaction: AutocompleteInteraction<CacheType>): Promise<void>;
  selectMenu?(
    interaction: StringSelectMenuInteraction<CacheType>,
  ): Promise<any>;
}
