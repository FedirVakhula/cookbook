import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './component/home/home.component';
import { ContactComponent } from './component/contact/contact.component';
import { PathNotFoundComponent } from './component/path-not-found/path-not-found.component';
import { RecipeComponent } from './component/recipe/recipe.component';
import { FormEditRecipeComponent } from './component/form-edit-recipe/form-edit-recipe.component';
import { AddRecipeComponent } from './component/add-recipe/add-recipe.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AllRecipesComponent } from './component/all-recipes/all-recipes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    PathNotFoundComponent,
    RecipeComponent,
    FormEditRecipeComponent,
    AddRecipeComponent,
    AllRecipesComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
