export class Character {
  name: string;
  race: string;
  characterClass: string;
  alignment: string;
  level: string;

  constructor(
    name: string,
    race: string,
    characterClass: string,
    alignment: string,
    level: string,
  ) {
    this.name = name;
    this.race = race;
    this.characterClass = characterClass;
    this.alignment = alignment;
    this.level = level;
  }
}
