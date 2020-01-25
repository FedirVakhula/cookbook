import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { Location } from '@angular/common';
import { CommunicationService } from 'src/app/service/communication.service';
import { EditService } from 'src/app/service/edit.service';
import { IRecipes } from 'src/app/models/recipes';



@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
  public addrecipe: FormGroup;

  constructor(
    private editService: EditService,
    private location: Location,
    private communicationService: CommunicationService
  ) { }

  ngOnInit() {
    this.addrecipe = this.editService.initForm();
  }

  get ingredients(): FormArray {
    return this.editService.getIngredients(this.addrecipe);
  }

  public addIngredients (): void {
    this.editService.addIngredients(this.addrecipe);
  }

  public goBack(): void {
    this.location.back();
  }

  public addNewRecipe(): void {
    const newRecipes: IRecipes[] = this.communicationService.getRecipes();
    const recipe: IRecipes = {
      id: Math.floor(Math.random() * 1000000),
      version: [
        {
          name: this.addrecipe.value.name,
          recipe: this.addrecipe.value.recipe,
          ingredients: this.addrecipe.value.ingredients,
          date: Date.now(),
          id: Math.floor(Math.random() * 1000000),
        }]
    };
    newRecipes.push(recipe);
    localStorage.setItem('recipes', JSON.stringify(newRecipes));
    this.goBack();
  }
}
