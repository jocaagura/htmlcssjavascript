
class PersonaNormal {
    constructor(
        public realName: string,
        public address: string = "") {}
  }
  
  class Hero extends PersonaNormal {
    //alterEgo: string;
    //age: number;
    //realName: string;
    printName = function (): string {
      return "My name is "; // + this.realName;
    };
  
    constructor(
      public alterEgo: string,
      public age: number,
      public realName: string,
      public address: string
       ) {
           super(realName, address);
       }
  }
  
  const ironman = new Hero("Ironman", 35, "Tony Stark", "NY♥");
  console.log(ironman);
  