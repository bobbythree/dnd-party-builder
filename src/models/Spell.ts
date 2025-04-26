export class Spell {
  name: string;
  type: string;
  effect: string;

  constructor(name: string, type: string, effect: string) {
    this.name = name;
    this.type = type;
    this.effect = effect;
  }
}
