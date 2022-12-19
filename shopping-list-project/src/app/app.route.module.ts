import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { RecipeListComponent } from "./recipes/recipe-list/recipe-list.component";
import { Recipe } from "./recipes/recipe.model";
import { RecipesStartComponent } from "./recipes/recipes-start.component";
import { RecipesComponent } from "./recipes/recipes.component";
import ShoppingEditComponent from "./shopping-list/shopping-edit/shopping-edit.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";


const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    {
        path: 'recipes', component: RecipesComponent, children: [
            { path: '', component: RecipesStartComponent }, 
            { path: 'new', component: RecipeEditComponent },
            { path: ':id', component: RecipeDetailComponent },
            { path: ':id/edit', component: RecipeEditComponent }
        ]
    },
    { path: 'shopping-list', component: ShoppingListComponent, children:[
        {path:'edit', component: ShoppingEditComponent}
    ] }

];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
        ReactiveFormsModule
    ],
    exports: [RouterModule, ReactiveFormsModule]

})
export class AppRouteModule {

}