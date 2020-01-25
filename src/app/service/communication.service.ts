import { Injectable } from '@angular/core';
import { IRecipes } from '../models/recipes';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  private recipes: IRecipes[] = [{
    id: Math.floor(Math.random() * 1000000),
    version: [{
      name: 'борщ',
      recipe: 'варити 45 хв',
      ingredients: [{ ingredient1: 111 }, { ingredient1: 222 }],
      date: Date.now(),
      id: Math.floor(Math.random() * 1000000),
    }]
  },
  {
    id: Math.floor(Math.random() * 1000000),
    version: [
      {
        name: 'вареники',
        recipe: 'зліпити і варити 30 хв :)',
        ingredients: [{ ingredient1: 333 }, { ingredient1: 444 }, { ingredient1: 555 }],
        date: Date.now(),
        id: Math.floor(Math.random() * 1000000),
      }, {
        name: 'вареники',
        recipe: 'зліпити і варити 45 хв :)',
        ingredients: [{ ingredient1: 555 }, { ingredient1: 777 }],
        date: Date.now(),
        id: Math.floor(Math.random() * 1000000),
      }
    ]
  }
];

  constructor() { this.init(); }

  private init(): void {
    const recipes = localStorage.getItem('recipes');
    if (!recipes) {
      localStorage.setItem('recipes', JSON.stringify(this.recipes));
    }
  }

  public getRecipes(): IRecipes[] {
    return JSON.parse(localStorage.getItem('recipes'));
  }

  public getRecipe(id: number): IRecipes {
    const recipes = this.getRecipes();
    return recipes.find((element: IRecipes) => element.id === +id);
  }
}
