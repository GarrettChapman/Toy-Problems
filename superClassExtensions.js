// Your task is to complete the Cat class which Extends Animal, we want to go to use the original speak method as well, so you must use the super method so the speak method for Cat now returns e.g.
// 'Mr Whiskers makes a noise, Mr Whiskers goes meow.'


class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return this.name + ' makes a noise, ' + this.name + ' goes meow.';
  }
}

class Cat extends Animal {

}
