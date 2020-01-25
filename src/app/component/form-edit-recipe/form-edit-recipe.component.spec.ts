import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';

import { FormEditRecipeComponent } from './form-edit-recipe.component';
import { CommunicationService } from 'src/app/service/communication.service';
import { Location } from '@angular/common';

describe('FormEditRecipeComponent', () => {
  let component: FormEditRecipeComponent;
  let fixture: ComponentFixture<FormEditRecipeComponent>;


  class CommunicationServiceMock {
    getRecipes = jasmine.createSpy();
  }

  class LocationMock {
    back = jasmine.createSpy();
  }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [ FormEditRecipeComponent ],
      providers: [
        FormBuilder,
        { provide: CommunicationService, useClass: CommunicationServiceMock },
        { provide: Location, useClass: LocationMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEditRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
