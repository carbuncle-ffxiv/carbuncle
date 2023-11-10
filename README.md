# Carbuncle

![GitHub](https://img.shields.io/github/license/carbuncle-ffxiv/carbuncle)
[![Discord](https://img.shields.io/discord/1170436893368909904.svg?logo=discord)](https://discord.gg/7rNFn2s2j8)

A simple & user-friendly Discord bot for Final Fantasy XIV, built with [discord.js](https://discord.js.org) that provides a variety of useful features for players.

## Features

- Access market data from [Universalis](https://universalis.app/) to stay updated on item prices.
- Retrieve data from [FFXIV Clock](https://www.ffxivclock.com/) for specific nodes or resources.
- Fetch Lodestone data from [XIVAPI](https://xivapi.com/) about characters, free companies, and linkshells.
- Get information about FFXIV items, quests, and achievements.

## Table of Contents

- [Usage](#usage)
- [Installation](#installation)
- [Contributing](#contributing)
- [Self-Hosting](#self-hosting)
- [License](#license)

## Usage

1. Invite the bot to your Discord server and ensure it has the necessary permissions.
2. Make sure the .env file is configured correctly.
3. Start the bot using the installation instructions.

## Installation

> [!NOTE]  
> We recommend using our hosted version of Carbuncle, but if you want to host it yourself, follow the instructions below.

To get started, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/carbuncle-ffxiv/carbuncle.git
```

2. Install dependencies

```bash
pnpm install
```

3. Copy the example config file

```bash
cp .env.example .env
```

4. Build the bot

```bash
pnpm build
```

5. Start the bot

```bash
pnpm start
```

## Contributing

I welcome contributions from the community. If you have ideas for improvements or find issues, please open a pull request or submit an issue.

## Self-Hosting

The inclusion of the bot's source code herein is primarily intended to foster transparency and facilitate other developers in incorporating similar functionalities into their respective projects.

Given the inherent simplicity of the bot, utilizing the publicly-hosted version is generally sufficient for the majority of users. It is strongly recommended to employ the public version, unless specific reasons necessitate an alternative approach, such as for experimental purposes.

While users are granted the autonomy to host the bot on their own servers, it is imperative to note that support for self-hosted instances will not be provided. Undertaking self-hosting is at the sole risk and responsibility of the user. Moreover, any attempts to monetize the hosted bot are expressly prohibited. The bot is designed to serve the community altruistically and is to remain free of any charges.

## License

Distributed under the GNU GENERAL PUBLIC LICENSE V3 License. See [LICENSE](LICENSE) for more information.
