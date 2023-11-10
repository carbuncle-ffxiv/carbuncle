import type { BaseTranslation } from '../../i18n-types.js';

const en_embeds = {
  about: {
    description:
      '**{username:string}** is a Discord bot written in TypeScript using the [discord.js](https://discord.js.org) library, created by glazk0 & grizzlemethis.',
    statistics: {
      title: 'Statistics',
      value: 'Servers: {servers:string}\nUsers: {users:string}',
    },
    debug: {
      title: 'Debug',
      value: 'Shard ID: {shardId:string}',
    },
  },
  help: {
    author: "{username:string}'s commands",
    description:
      'Here is a list of all my commands. You can use `/help <command>` to get more information about a specific command.',
    information: '{name:string} information',
  },
} satisfies BaseTranslation;

export default en_embeds;
