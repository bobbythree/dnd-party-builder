import { Character } from './Character.ts'

class Bard extends Character {
  instrument: string;
  spells: string[];

  constructor(
    name: string,
    level: string,
    race: string,
    alignment: string,
    instrument: string,
    spells: string[]
  ) {
    super(name, level, race, alignment, "Bard")
    this.instrument = instrument;
    this.spells = spells;
  }
}
