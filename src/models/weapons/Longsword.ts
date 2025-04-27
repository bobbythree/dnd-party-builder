import { Weapon } from './Weapon.ts'

class Longsword extends Weapon {
  name: string;
  damage: string;

  constructor(name: string, damage: string) {
    super(name, damage)
    this.name = 'Longsword';
    this.damage = '1d8 slashing';
  }
}
