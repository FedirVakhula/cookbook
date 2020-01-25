import { Component, OnInit, Input } from '@angular/core';
import { IRecipes } from 'src/app/models/recipes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  @Input() recipe: IRecipes;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public onRecipe(recipe: IRecipes): void {
    const link = ['/home', recipe.id];
    this.router.navigate(link);
  }

}
