import { Spell } from '../Spell.ts'

class SpeakWithAmimals extends Spell {
  name: string;
  type: string;
  effect: string;

  constructor(name: string, type: string, effect: string) {
    super(name, type, effect);
    this.name = 'Speak with Animals';
    this.type = 'Divination';
    this.effect = 'Communication: Comprehend and verbally speak with Beasts';
  }
}
