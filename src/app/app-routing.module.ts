import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RecipesListComponent} from './recipes-list/recipes-list.component';
import {MapComponent} from './map/map.component';
import {RecipeComponent} from './recipe/recipe.component';

const routes: Routes = [
  { path: 'recipes', component:  RecipesListComponent},
  { path: 'map', component:  MapComponent},
  { path: 'recipe', component: RecipeComponent},
  { path: '', component: RecipesListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
