import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { DetailRecipeComponent } from './detail-recipe/detail-recipe.component';
import { FavoriteRecipesComponent } from './favorite-recipes/favorite-recipes.component';
import { NewRecipesComponent } from './new-recipes/new-recipes.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/all',
    pathMatch: 'full'
  },
  { 
    path: 'all', 
    component: AllRecipesComponent,
    pathMatch: 'full' 
  },
  { 
    path: 'favorites', 
    component: FavoriteRecipesComponent,
    pathMatch: 'full' 
  },
  { 
    path: 'new', 
    component: NewRecipesComponent,
    pathMatch: 'full' 
  },
  { 
    path: 'detail/:id', 
    component: DetailRecipeComponent,
    pathMatch: 'full' 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
