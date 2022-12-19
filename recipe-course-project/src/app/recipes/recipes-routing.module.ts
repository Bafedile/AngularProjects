import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { RecipesResolverService } from '../recipes-resolver.service';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditingComponent } from './recipe-editing/recipe-editing.component';
import { RecipesStartComponent } from './recipes-start.component';
import { RecipesComponent } from './recipes.component';

const routes: Routes = [
 
  {
    path: '',
    component: RecipesComponent,
    children: [
      { path: '', component: RecipesStartComponent },
      {
        path: 'new',
        component: RecipeEditingComponent,
        canActivateChild: [AuthGuard],
      },
      {
        path: ':id',
        component: RecipeDetailComponent,
        resolve: [RecipesResolverService],
      },
      {
        path: ':id/edit',
        component: RecipeEditingComponent,
        resolve: [RecipesResolverService],
      },
    ],
    canActivate: [AuthGuard],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipeRoutingModule {}
