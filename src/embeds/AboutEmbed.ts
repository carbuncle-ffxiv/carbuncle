import { userMention } from 'discord.js';

import { BaseEmbed } from './BaseEmbed.js';

import { developers } from '../utils/Commons.js';

import L from '../i18n/i18n-node.js';

export class AboutEmbed extends BaseEmbed {
  constructor(data: { servers: number | undefined; users: number | undefined; shardId: number | undefined }) {
    super();

    this.data.author = {
      name: this.client.user!.username,
      icon_url: this.client.user!.displayAvatarURL(),
    };

    this.data.thumbnail = {
      url: this.client.user!.displayAvatarURL(),
    };

    this.data.description = L.en.embeds.about.description({
      username: this.client.user!.username,
      developers: developers.map((id) => userMention(id)).join(', '),
    });

    this.data.fields = [
      {
        name: L.en.embeds.about.statistics.title(),
        value: L.en.embeds.about.statistics.value({
          servers: data.servers?.toLocaleString('en-US') ?? '0',
          users: data.users?.toLocaleString('en-US') ?? '0',
        }),
      },
      {
        name: L.en.embeds.about.debug.title(),
        value: L.en.embeds.about.debug.value({
          shardId: data?.shardId?.toString() ?? '0',
        }),
      },
    ];
  }
}
