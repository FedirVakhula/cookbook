import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRecipesComponent } from './all-recipes.component';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CommunicationService } from 'src/app/service/communication.service';

describe('AllRecipesComponent', () => {
  let component: AllRecipesComponent;
  let fixture: ComponentFixture<AllRecipesComponent>;
  let communicationServiceMock: CommunicationServiceMock;
  let location: Location;
  const recipe = {
      id: Math.floor(Math.random() * 1000000),
      version: [{
        name: 'борщ',
        recipe: 'варити 45 хв',
        ingredients: [{ ingredient1: 111 }, { ingredient1: 222 }],
        date: Date.now(),
        id: Math.floor(Math.random() * 1000000),
      }]
    };

  const ActivatedRouteMock = {
    snapshot: {
      paramMap: {
        get: jasmine.createSpy().and.returnValue('123')
      }
    }
  };

  class CommunicationServiceMock {
    getRecipe = jasmine.createSpy().and.returnValue(recipe);
  }

  class LocationMock {
    back = jasmine.createSpy();
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AllRecipesComponent],
      providers: [
        { provide: ActivatedRoute, useValue: ActivatedRouteMock },
        { provide: CommunicationService, useClass: CommunicationServiceMock },
        { provide: Location, useClass: LocationMock }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    communicationServiceMock = TestBed.get(CommunicationService);
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(AllRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get id when init component', () => {
    expect(component['id']).toBe(123);
  });

  it('should go back url', () => {
    component.goBack();
    expect(location.back).toHaveBeenCalled();
  });
});
