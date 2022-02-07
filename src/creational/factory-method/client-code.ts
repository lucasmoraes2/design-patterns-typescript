import { CarFactory } from './factories/car-factory';
import { randomVehicleAlgorithm } from './main/random-vehicle-algorithm';
import { randomNumbers } from './utils/random-numbers';

// const carFactory = new CarFactory();
const customerNames = ['Phoebe', 'Joey', 'Aurora', 'Florence'];

for (let i = 0; i < 10; i++) {
  const vehicle = randomVehicleAlgorithm();
  const name = customerNames[randomNumbers(customerNames.length)];
  vehicle.pickUp(name);
  vehicle.stop();
  // const newCar = carFactory.pickUp(
  //     name,
  //     `NOVO CARRO - ${randomNumbers(100)}`,
  // );
  // newCar.stop();
  console.log('---');
}
