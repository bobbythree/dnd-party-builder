import { Character } from './Character.ts'
import { Weapon } from './Weapon.ts'

class Fighter extends Character {
  weapon: Weapon;

  constructor(
    name: string,
    level: number,
    race: string,
    dnd_class: string,
    weapon: Weapon
  ) {
    super(name, level, race, dnd_class)
    this.weapon = weapon;
  }
}
