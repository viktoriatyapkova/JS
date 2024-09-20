function countProperties(obj) {
    let count = 0;
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        count++;
      }
    }
    return count;
  }
  

class Vehicle {
constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}


calculate() {}
}


class Car extends Vehicle {
constructor(brand, model, year, engineCapacity, fuelConsumption) {
    super(brand, model, year);
    this.engineCapacity = engineCapacity;
    this.fuelConsumption = fuelConsumption;
}

calculate() {
    return this.fuelConsumption;
}
}

class Truck extends Vehicle {
constructor(brand, model, year, engineCapacity, fuelConsumption, payload) {
    super(brand, model, year);
    this.engineCapacity = engineCapacity;
    this.fuelConsumption = fuelConsumption;
    this.payload = payload;
}

calculate() {
    return this.fuelConsumption + (this.payload / 1000) * 0.1; 
}
}


class Bicycle extends Vehicle {
constructor(brand, model, year) {
    super(brand, model, year);
}

calculate() {
    return 0; 
}
}


const car = new Car("Toyota", "Camry", 2020, 2.5, 8); 
const truck = new Truck("Volvo", "FH16", 2022, 16, 15, 20000); 
const bicycle = new Bicycle("Trek", "Madone SLR", 2023);

console.log(`Car: ${car.brand} ${car.model} - расход топлива: ${car.calculate()} л/100 км`);
console.log(`Truck: ${truck.brand} ${truck.model} - расход топлива: ${truck.calculate()} л/100 км`);
console.log(`Bicycle: ${bicycle.brand} ${bicycle.model} - расход энергии: ${bicycle.calculate()}`);

const test = { name: "John", age: 30, city: "New York" };
console.log(`Количество свойств: ${countProperties(test)}`); 