function cats(arr) {
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }

  arr.forEach((cat) => {
    const catInfo = cat.split(' ');

    const newCat = new Cat(catInfo[0], catInfo[1]);
    newCat.meow();
  });
}

cats(['Mellow 2', 'Tom 5']);
