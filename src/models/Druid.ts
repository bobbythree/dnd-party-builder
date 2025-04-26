import { Character } from './Character.ts'

class Druid extends Character {
  spells: string[];

  constructor(
    name: string,
    level: number,
    race: string,
    dnd_class: string,
    spells: string[]
  ) {
    super(name, level, race, dnd_class)
    this.spells = spells;
  }
}
