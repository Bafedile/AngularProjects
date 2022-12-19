import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DropdownDirective } from '../shared/dropdown.directive';
import { SharedModule } from '../shared/shared.module';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditingComponent } from './recipe-editing/recipe-editing.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeRoutingModule } from './recipes-routing.module';
import { RecipesStartComponent } from './recipes-start.component';
import { RecipesComponent } from './recipes.component';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipesStartComponent,
    RecipeEditingComponent
  ],
  imports:[
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    RecipeRoutingModule,
    SharedModule
  ],
  exports:[
    // DropdownDirective
  ]
})
export class RecipesModule {}
