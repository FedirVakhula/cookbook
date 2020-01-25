import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EditService } from 'src/app/service/edit.service';
import { IRecipes } from 'src/app/models/recipes';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormArray } from '@angular/forms';
import { CommunicationService } from 'src/app/service/communication.service';

@Component({
  selector: 'app-form-edit-recipe',
  templateUrl: './form-edit-recipe.component.html',
  styleUrls: ['./form-edit-recipe.component.css']
})
export class FormEditRecipeComponent implements OnInit {

  public resipe: IRecipes;
  public isEdited: boolean = true;
  private id: number;
  public addrecipe: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private editService: EditService,
    private location: Location,
    private communicationService: CommunicationService,
    private router: Router
    ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.resipe = this.communicationService.getRecipe(this.id);
    this.addrecipe = this.editService.initForm(
      { value: this.resipe.version[0].name, disabled: true },
      { value: this.resipe.version[0].recipe, disabled: true },
      true
    );
    this.setIngradients();
  }

  private setIngradients(): void {
    this.resipe.version[0].ingredients.forEach((ingradient) => {
      this.editService.addIngredients(this.addrecipe, true, ingradient.ingredient1, this.isEdited);
    });
  }

  get ingredients(): FormArray {
    return this.editService.getIngredients(this.addrecipe);
  }

  public addIngredients(value: string): void {
    this.editService.addIngredients(this.addrecipe, true, value, this.isEdited);
  }

  public goBack(): void {
    this.location.back();
  }

  public goAllRecipes(): void {
    const link = ['/all-recipes', this.id];
    this.router.navigate(link);
  }

  public goEdit(): void {
    this.isEdited = false;
    this.addrecipe.enable();
  }

  public saveEdit(): void {
    const newRecipes = this.communicationService.getRecipes();
    const recipe = {
          name: this.addrecipe.value.name,
          recipe: this.addrecipe.value.recipe,
          ingredients: this.addrecipe.value.ingredients,
          date: Date.now(),
          id: this.id,
    };

    const savedRecipe = newRecipes.find(element => element.id === this.id);
    savedRecipe.version.unshift(recipe);
    localStorage.setItem('recipes', JSON.stringify(newRecipes));
    this.goBack();
  }
}
