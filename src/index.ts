class StandardUser {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  read(data: string) {
    console.log(`${this.name} has read: ${data}`);
  }
}

class AdvancedUser extends StandardUser {
  constructor(name: string) {
    super(name);
  }

  write(data: string) {
    console.log(`${this.name} has written: ${data}`);
  }
}

class PromotedUser {
  name: string;
  private user: AdvancedUser;

  constructor(user: AdvancedUser) {
    this.name = user.name;
    this.user = user;
  }

  read(data: string) {
    this.user.read(data);
  }

  write(data: string) {
    this.user.write(data);
  }

  update(id: number) {
    console.log(`${this.name} has updated data with id: ${id}`);
  }

  delete(id: number) {
    console.log(`${this.name} has deleted data with id: ${id}`);
  }
}

const tim = new AdvancedUser("tim");
tim.read("article 1 ");
tim.write("some data");

const promotedTim = new PromotedUser(tim);
console.log(promotedTim.name);
promotedTim.update(945);
promotedTim.delete(945);
