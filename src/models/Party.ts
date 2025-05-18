import { Character } from './characters/Character.ts'

export class Party {
  name: string = '';
  members: Character[] = [];

  constructor() {

  }
  setName(name: string) {
    this.name = name;
  }
  addMember(member: Character) {
    this.members.push(member);
  }
  getAllMembers() {
    this.members.forEach(e => {
      console.log(e);
    })
  }
}
