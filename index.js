class car {
  constructor(name, model) {
    this.name = name;
    this.model = model;
  }

  carInfo() {
    return `car name is ${this.name} and car model is ${this.model}`;
  }
}

function addCar() {
  document.getElementById("button").style.display = "none";
  const car1 = new car();

  car1.name = prompt("enter car name : ");
  car1.model = prompt("enter car model :");

  document.getElementById("car").innerHTML = car1.carInfo();
}
