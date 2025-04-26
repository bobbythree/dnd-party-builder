export class Character {
  name: string;
  level: number;
  race: string;
  dnd_class: string;

  constructor(
    name: string,
    level: number,
    race: string,
    dnd_class: string,
  ) {
    this.name = name;
    this.level = level;
    this.race = race;
    this.dnd_class = dnd_class;
  }
}
