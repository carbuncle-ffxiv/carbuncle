import L from '../i18n/i18n-node.js';
import { BaseEmbed } from './BaseEmbed.js';

export class AboutEmbed extends BaseEmbed {
  constructor(data: any) {
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
    });

    this.data.fields = [
      {
        name: L.en.embeds.about.statistics.title(),
        value: L.en.embeds.about.statistics.value({
          servers: data.guilds.toLocaleString('en-US'),
          users: data.users.toLocaleString('en-US'),
        }),
      },
      {
        name: L.en.embeds.about.debug.title(),
        value: L.en.embeds.about.debug.value({
          shardId: data.shardId,
        }),
      },
    ];
  }
}
