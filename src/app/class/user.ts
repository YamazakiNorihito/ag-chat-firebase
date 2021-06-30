export class User {

  inital : string;
  uid:number;
  name:string;

  constructor(uid: number, name: string) {
    this.inital = name.slice(0,1);
    this.uid = uid;
    this.name = name;
  }
}
