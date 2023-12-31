// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type { BaseTranslation as BaseTranslationType, LocalizedString, RequiredParams } from 'typesafe-i18n'

export type BaseTranslation = BaseTranslationType & DisallowNamespaces
export type BaseLocale = 'en'

export type Locales =
	| 'en'

export type Translation = RootTranslation & DisallowNamespaces

export type Translations = RootTranslation &
{
	commands: NamespaceCommandsTranslation,
	embeds: NamespaceEmbedsTranslation
}

type RootTranslation = {
	/**
	 * H​i​ ​{​n​a​m​e​}​!​ ​P​l​e​a​s​e​ ​l​e​a​v​e​ ​a​ ​s​t​a​r​ ​i​f​ ​y​o​u​ ​l​i​k​e​ ​t​h​i​s​ ​p​r​o​j​e​c​t​:​ ​h​t​t​p​s​:​/​/​g​i​t​h​u​b​.​c​o​m​/​i​v​a​n​h​o​f​e​r​/​t​y​p​e​s​a​f​e​-​i​1​8​n
	 * @param {string} name
	 */
	HI: RequiredParams<'name'>
}

export type NamespaceCommandsTranslation = {
	help: {
		/**
		 * I​ ​c​o​u​l​d​ ​n​o​t​ ​f​i​n​d​ ​t​h​a​t​ ​c​o​m​m​a​n​d​,​ ​c​a​n​ ​y​o​u​ ​t​r​y​ ​a​g​a​i​n​?
		 */
		commandNotFound: string
	}
}

export type NamespaceEmbedsTranslation = {
	about: {
		/**
		 * *​*​{​u​s​e​r​n​a​m​e​}​*​*​ ​i​s​ ​a​ ​D​i​s​c​o​r​d​ ​b​o​t​ ​w​r​i​t​t​e​n​ ​i​n​ ​T​y​p​e​S​c​r​i​p​t​ ​u​s​i​n​g​ ​t​h​e​ ​[​d​i​s​c​o​r​d​.​j​s​]​(​h​t​t​p​s​:​/​/​d​i​s​c​o​r​d​.​j​s​.​o​r​g​)​ ​l​i​b​r​a​r​y​,​ ​c​r​e​a​t​e​d​ ​b​y​ ​g​l​a​z​k​0​ ​&​ ​g​r​i​z​z​l​e​m​e​t​h​i​s​.
		 * @param {string} username
		 */
		description: RequiredParams<'username'>
		statistics: {
			/**
			 * S​t​a​t​i​s​t​i​c​s
			 */
			title: string
			/**
			 * S​e​r​v​e​r​s​:​ ​{​s​e​r​v​e​r​s​}​
		​U​s​e​r​s​:​ ​{​u​s​e​r​s​}
			 * @param {string} servers
			 * @param {string} users
			 */
			value: RequiredParams<'servers' | 'users'>
		}
		debug: {
			/**
			 * D​e​b​u​g
			 */
			title: string
			/**
			 * S​h​a​r​d​ ​I​D​:​ ​{​s​h​a​r​d​I​d​}
			 * @param {string} shardId
			 */
			value: RequiredParams<'shardId'>
		}
	}
	help: {
		/**
		 * {​u​s​e​r​n​a​m​e​}​'​s​ ​c​o​m​m​a​n​d​s
		 * @param {string} username
		 */
		author: RequiredParams<'username'>
		/**
		 * H​e​r​e​ ​i​s​ ​a​ ​l​i​s​t​ ​o​f​ ​a​l​l​ ​m​y​ ​c​o​m​m​a​n​d​s​.​ ​Y​o​u​ ​c​a​n​ ​u​s​e​ ​`​/​h​e​l​p​ ​<​c​o​m​m​a​n​d​>​`​ ​t​o​ ​g​e​t​ ​m​o​r​e​ ​i​n​f​o​r​m​a​t​i​o​n​ ​a​b​o​u​t​ ​a​ ​s​p​e​c​i​f​i​c​ ​c​o​m​m​a​n​d​.
		 */
		description: string
		/**
		 * {​n​a​m​e​}​ ​i​n​f​o​r​m​a​t​i​o​n
		 * @param {string} name
		 */
		information: RequiredParams<'name'>
	}
}

export type Namespaces =
	| 'commands'
	| 'embeds'

type DisallowNamespaces = {
	/**
	 * reserved for 'commands'-namespace\
	 * you need to use the `./commands/index.ts` file instead
	 */
	commands?: "[typesafe-i18n] reserved for 'commands'-namespace. You need to use the `./commands/index.ts` file instead."

	/**
	 * reserved for 'embeds'-namespace\
	 * you need to use the `./embeds/index.ts` file instead
	 */
	embeds?: "[typesafe-i18n] reserved for 'embeds'-namespace. You need to use the `./embeds/index.ts` file instead."
}

export type TranslationFunctions = {
	/**
	 * Hi {name}! Please leave a star if you like this project: https://github.com/ivanhofer/typesafe-i18n
	 */
	HI: (arg: { name: string }) => LocalizedString
	commands: {
		help: {
			/**
			 * I could not find that command, can you try again?
			 */
			commandNotFound: () => LocalizedString
		}
	}
	embeds: {
		about: {
			/**
			 * **{username}** is a Discord bot written in TypeScript using the [discord.js](https://discord.js.org) library, created by glazk0 & grizzlemethis.
			 */
			description: (arg: { username: string }) => LocalizedString
			statistics: {
				/**
				 * Statistics
				 */
				title: () => LocalizedString
				/**
				 * Servers: {servers}
			Users: {users}
				 */
				value: (arg: { servers: string, users: string }) => LocalizedString
			}
			debug: {
				/**
				 * Debug
				 */
				title: () => LocalizedString
				/**
				 * Shard ID: {shardId}
				 */
				value: (arg: { shardId: string }) => LocalizedString
			}
		}
		help: {
			/**
			 * {username}'s commands
			 */
			author: (arg: { username: string }) => LocalizedString
			/**
			 * Here is a list of all my commands. You can use `/help <command>` to get more information about a specific command.
			 */
			description: () => LocalizedString
			/**
			 * {name} information
			 */
			information: (arg: { name: string }) => LocalizedString
		}
	}
}

export type Formatters = {}
