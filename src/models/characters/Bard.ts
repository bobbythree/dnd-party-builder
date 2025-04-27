import { Character } from './Character.ts'

class Bard extends Character {
  instrument: string;

  constructor(
    name: string,
    level: number,
    race: string,
    dnd_class: string,
    instrument: string
  ) {
    super(name, level, race, dnd_class)
    this.instrument = instrument;
  }
}
