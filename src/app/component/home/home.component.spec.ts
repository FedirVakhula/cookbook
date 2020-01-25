import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { HomeComponent } from './home.component';
import { CommunicationService } from 'src/app/service/communication.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  const recipes = [{
    id: Math.floor(Math.random() * 1000000),
    version: [{
      name: 'борщ',
      recipe: 'варити 45 хв',
      ingredients: [{ ingredient1: 111 }, { ingredient1: 222 }],
      date: Date.now(),
      id: Math.floor(Math.random() * 1000000),
    }]
  }];

  class CommunicationServiceMock {
    getRecipes = jasmine.createSpy().and.returnValue(recipes);
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [
        { provide: CommunicationService, useClass: CommunicationServiceMock }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    expect(component.recipes).toEqual(recipes);
  });
});
