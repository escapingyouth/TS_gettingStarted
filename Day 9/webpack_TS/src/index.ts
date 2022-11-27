import { add, multiply, divide } from './utils';
import Dog from './Dog';
import ShelterDog from './ShelterDog';

const elton = new Dog('Elton', 'Aussie', 0.5);
elton.bark();

const buffy = new ShelterDog('Buffy', 'Pitbull', 5, 'Paws and Claws');

console.log(add(3, 5));
console.log(multiply(3, 5));
console.log(divide(3, 5));

console.log('This is the index file');
