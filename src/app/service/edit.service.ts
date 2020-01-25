import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class EditService {

  constructor(
    private formBuilder: FormBuilder
    ) { }

  public initForm(nameValue: any = '', reciepes: any = '', isEmpty: boolean = false): FormGroup {
    return this.formBuilder.group({
      name: [nameValue, [Validators.required, Validators.minLength(3)]],
      recipe: [reciepes, [Validators.required, Validators.minLength(3)]],
      ingredients: isEmpty ? this.formBuilder.array([]) : this.formBuilder.array([this.buildIngredient()])
    });
  }

  public getIngredients(reciepes: FormGroup): FormArray {
    return <FormArray>reciepes.get('ingredients');
  }

  public addIngredients(reciepes: FormGroup, needDisableProperty: boolean = false, value?: string,  isDisabled?: boolean): void {
    this.getIngredients(reciepes).push(this.buildIngredient(value, needDisableProperty, isDisabled));
  }

  private buildIngredient(value: string = '', needDisableProperty: boolean = false, isDisabled?: boolean): FormGroup {
    let options: any;
    needDisableProperty ? options = { value, disabled: isDisabled } : value;
    return this.formBuilder.group({
      ingredient1: [options, [Validators.required, Validators.minLength(3)]]
    });
  }
}
