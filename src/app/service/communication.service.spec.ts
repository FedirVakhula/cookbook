import { TestBed } from '@angular/core/testing';

import { CommunicationService } from './communication.service';

describe('CommunicationService', () => {
  let service: CommunicationService;

  const recipes = [{
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
  }];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommunicationService]
    });

    service = TestBed.get(CommunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get recipes', () => {
    localStorage.setItem('recipes', JSON.stringify(recipes));
    expect(service.getRecipes()).toEqual(recipes);
  });

  it('should get recipe', () => {
    localStorage.setItem('recipes', JSON.stringify(recipes));
    expect(service.getRecipes()).toEqual(recipes);
  });
});
