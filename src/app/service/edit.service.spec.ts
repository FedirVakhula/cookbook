import { TestBed } from '@angular/core/testing';

import { EditService } from './edit.service';
import { FormBuilder, FormGroup } from '@angular/forms';

describe('EditService', () => {
  let service: EditService;
  let reciepeForm: FormGroup = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormBuilder, EditService]
    });

    service = TestBed.get(EditService);
    reciepeForm = service.initForm();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should init form', () => {
    expect(reciepeForm).not.toBeNull();
  });

  it('form invalid when empty', () => {
    expect(reciepeForm.valid).toBeFalsy();
  });

  it('name field validity', () => {
    let errors = {};
    const name = reciepeForm.controls['name'];
    expect(name.valid).toBeFalsy();

    errors = name.errors || {};

    name.setValue('te');
    errors = name.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['minlength']).toBeTruthy();

    name.setValue('test name');
    errors = name.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['minlength']).toBeFalsy();
  });

  it('recipe field validity', () => {
    let errors = {};
    const recipe = reciepeForm.controls['recipe'];
    expect(recipe.valid).toBeFalsy();

    errors = recipe.errors || {};

    recipe.setValue('te');
    errors = recipe.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['minlength']).toBeTruthy();

    recipe.setValue('test name');
    errors = recipe.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['minlength']).toBeFalsy();
  });

});
