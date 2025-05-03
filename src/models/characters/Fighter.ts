import { Character } from './Character.ts'
import { Weapon } from '../weapons/Weapon.ts'

class Fighter extends Character {
  weapon: Weapon;

  constructor(
    name: string,
    level: number,
    race: string,
    weapon: Weapon
  ) {
    super(name, level, race, "Fighter")
    this.weapon = weapon;
  }
}
