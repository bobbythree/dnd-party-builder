export class Character {
  id: string;
  name: string;
  race: string;
  characterClass: string;
  alignment: string;
  level: string;

  constructor(
    //id: string,
    name: string,
    race: string,
    characterClass: string,
    alignment: string,
    level: string,
  ) {
    this.id = crypto.randomUUID()
    this.name = name;
    this.race = race;
    this.characterClass = characterClass;
    this.alignment = alignment;
    this.level = level;
  }
}
