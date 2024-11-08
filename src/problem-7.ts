class Car {
  constructor(public make: string, public model: string, public year: number) {}

  getCarAge(): number {
    const curDate = new Date().getFullYear();
    return curDate - this.year;
  }
}

const car = new Car("Honda", "Civic", 2018);
console.log(car.getCarAge());
