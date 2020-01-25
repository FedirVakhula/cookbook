import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { HomeComponent } from './component/home/home.component';
import { ContactComponent } from './component/contact/contact.component';
import { PathNotFoundComponent } from './component/path-not-found/path-not-found.component';
import { FormEditRecipeComponent } from './component/form-edit-recipe/form-edit-recipe.component';
import { AddRecipeComponent } from './component/add-recipe/add-recipe.component';
import { AllRecipesComponent } from './component/all-recipes/all-recipes.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: ContactComponent
  },
  {
    path: 'add',
    component: AddRecipeComponent
  },
  {
    path: 'all-recipes/:id',
    component: AllRecipesComponent
  },
  {
    path: 'home/:id',
    component: FormEditRecipeComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PathNotFoundComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
