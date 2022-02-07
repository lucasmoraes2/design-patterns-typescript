import { MainDishBuilder } from '../../creational/builder/classes/main-dish-builder';
import { MainDishWithoutSaladBuilder } from '../../creational/builder/classes/main-dish-without-salad-builder';

export class BuilderFacade {
  // Essa é a fachada para a pasta src/creational/builder/index.ts

  private mainDishBuilder = new MainDishBuilder();
  private mainDishWithoutSaladBuilder = new MainDishWithoutSaladBuilder();

  makeMeal1() {
    this.mainDishBuilder.makeMeal().makeDessert();
    console.log(this.mainDishBuilder.getMeal());
    console.log(this.mainDishBuilder.getPrice());
    this.mainDishBuilder.reset();
  }

  makeMeal2() {
    this.mainDishWithoutSaladBuilder.makeMeal().makeDessert();
    console.log(this.mainDishWithoutSaladBuilder.getMeal());
    console.log(this.mainDishWithoutSaladBuilder.getPrice());
  }
}
