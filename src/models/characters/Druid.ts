import { Character } from './Character.ts'

class Druid extends Character {
  spells: string[];
  weapon: string;

  constructor(
    name: string,
    level: string,
    race: string,
    alignment: string,
    spells: string[],
    weapon: string
  ) {
    super(name, level, race, alignment, "Druid")
    this.spells = spells;
    this.weapon = weapon;
  }
}
