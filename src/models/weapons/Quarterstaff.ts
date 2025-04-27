import { Weapon } from './Weapon.ts'

class Quarterstaff extends Weapon {
  name: string;
  damage: string;

  constructor(name: string, damage: string) {
    super(name, damage)
    this.name = 'Quarterstaff';
    this.damage = '1d6 bludgeoning';
  }
}
