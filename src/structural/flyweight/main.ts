import { deliveryContext } from './delivery/delivery-context';
import { DeliveryFactory } from './delivery/delivery-factory';

const factory = new DeliveryFactory();
deliveryContext(factory, 'Lucas', '20A', 'Av Brasil', 'SP');
deliveryContext(factory, 'Aurora', '20A', 'Av Brasil', 'SP');
deliveryContext(factory, 'Phoebe', '502', 'Av Brasil', 'SP');
deliveryContext(factory, 'Joey', '2', 'Rua A', 'BH');
deliveryContext(factory, 'Florence', '4', 'Rua B', 'RJ');

console.log();
console.log(factory.getLocations());
