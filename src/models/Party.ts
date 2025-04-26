import { Character } from './Character.ts'

class Party {
  name: string;
  members: Character[] = [];

  constructor(name: string) {
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

