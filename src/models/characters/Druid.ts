import { Character } from './Character.ts'

class Druid extends Character {
  spells: string[];
  weapon: string;

  constructor(
    name: string,
    level: number,
    race: string,
    spells: string[],
    weapon: string
  ) {
    super(name, level, race, "Druid")
    this.spells = spells;
    this.weapon = weapon;
  }
}
