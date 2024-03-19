class car {
  constructor(name, model) {
    this.name = name;
    this.model = model;
  }

  car() {
    return (document.getElementById(
      "car"
    ).innerHTML = `car name is ${name} and car model is ${this.model}`);
  }
}

const car1 = new car();

car1.name = prompt("enter car name : ");
car1.model = prompt("enter car model :");
