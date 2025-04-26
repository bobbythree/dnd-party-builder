import { Character } from './Character.ts'

class Fighter extends Character {
  weapon: string;

  constructor(
    name: string,
    level: number,
    race: string,
    dnd_class: string,
    weapon: string
  ) {
    super(name, level, race, dnd_class)
    this.weapon = weapon;
  }
}
