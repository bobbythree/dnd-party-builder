import { Character } from './Character.ts'

class Bard extends Character {
  instrument: string;
  spells: string[];

  constructor(
    name: string,
    level: number,
    race: string,
    instrument: string,
    spells: string[]
  ) {
    super(name, level, race, "Bard")
    this.instrument = instrument;
    this.spells = spells;
  }
}
