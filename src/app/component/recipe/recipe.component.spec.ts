import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeComponent } from './recipe.component';
import { Router } from '@angular/router';

describe('RecipeComponent', () => {
  let component: RecipeComponent;
  let fixture: ComponentFixture<RecipeComponent>;
  let router: Router;

  const recipe = {
    id: 123,
    version: [{
      name: 'борщ',
      recipe: 'варити 45 хв',
      ingredients: [{ ingredient1: 111 }, { ingredient1: 222 }],
      date: Date.now(),
      id: 123,
    }]
  };

  class RouterMock {
    navigate = jasmine.createSpy();
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeComponent ],
      providers: [
        { provide: Router, useClass: RouterMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    router = TestBed.get(Router);
    fixture = TestBed.createComponent(RecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.recipe = recipe;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to recipe', () => {
    component.onRecipe(recipe);
    expect(router.navigate).toHaveBeenCalledWith(['/home', 123]);
  });
});
