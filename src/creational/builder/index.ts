import { MainDishBuilder } from './classes/main-dish-builder';
import { MainDishWithoutSaladBuilder } from './classes/main-dish-without-salad-builder';

const mainDishBuilder = new MainDishBuilder();
mainDishBuilder.makeMeal().makeDessert();
console.log(mainDishBuilder.getMeal());
console.log(mainDishBuilder.getPrice());

mainDishBuilder.reset();

const mainDishWithoutSaladBuilder = new MainDishWithoutSaladBuilder();
mainDishWithoutSaladBuilder.makeMeal().makeDessert();
console.log(mainDishWithoutSaladBuilder.getMeal());
console.log(mainDishWithoutSaladBuilder.getPrice());
