import { Spell } from '../Spell.ts'

class PoisonSpray extends Spell {
  name: string;
  type: string;
  effect: string;

  constructor(name: string, type: string, effect: string) {
    super(name, type, effect);
    this.name = 'Poison Spray';
    this.type = 'Conjuration';
    this.effect = '1d12 poison damage';
  }
}
