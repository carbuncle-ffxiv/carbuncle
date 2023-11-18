import { ClientEvents } from 'discord.js';

export class Event {
  public readonly id: string;

  public readonly event: keyof ClientEvents;

  public readonly once: boolean = false;

  constructor(id: string, event: keyof ClientEvents, once = false) {
    this.id = id;
    this.event = event;
    this.once = once;
  }

  public async run(...args: any[]): Promise<void> {
    throw new Error(`Event ${this.id} doesn't provide a run method.`);
  }
}
