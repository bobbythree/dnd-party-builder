import { Character } from './Character.ts'
import { Weapon } from '../weapons/Weapon.ts'

class Fighter extends Character {
  weapon: Weapon;

  constructor(
    name: string,
    level: string,
    race: string,
    alignment: string,
    weapon: Weapon
  ) {
    super(name, level, race, alignment, "Fighter")
    this.weapon = weapon;
  }
}
