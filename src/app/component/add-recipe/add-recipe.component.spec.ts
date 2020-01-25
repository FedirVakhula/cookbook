import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Location } from '@angular/common';
import { AddRecipeComponent } from './add-recipe.component';
import { CommunicationService } from 'src/app/service/communication.service';

import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EditService } from 'src/app/service/edit.service';


describe('AddRecipeComponent', () => {
  let component: AddRecipeComponent;
  let fixture: ComponentFixture<AddRecipeComponent>;
  let editService: EditService;
  const fb = new FormBuilder();
  const form: FormGroup = fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    recipe: ['', [Validators.required, Validators.minLength(3)]],
    ingredients: fb.array([fb.group({
      ingredient1: ['', [Validators.required, Validators.minLength(3)]]
    })])
  });

  class CommunicationServiceMock {
    getRecipes = jasmine.createSpy();
  }

  class EditServiceMock  {
    getIngredients = jasmine.createSpy();
    initForm = jasmine.createSpy().and.returnValue(form);
  }

  class LocationMock {
    back = jasmine.createSpy();
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [AddRecipeComponent],
      providers: [
        { provide: EditService, useClass: EditServiceMock },
        { provide: CommunicationService, useClass: CommunicationServiceMock },
        { provide: Location, useClass: LocationMock }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    editService = TestBed.get(EditService);

    fixture = TestBed.createComponent(AddRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  //   expect(editService.initForm).toHaveBeenCalled();
  // });

});
