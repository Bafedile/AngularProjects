import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user.model';
import { RecipeService } from '../recipes/recipe.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private user: User;
  isAuthenticated = false;

  constructor(private dataStorageService: DataStorageService,
    private recipeService: RecipeService,
    private router: Router, private route: ActivatedRoute,
    private authService: AuthService) { }


  ngOnInit(): void {
    this.subscription = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
    });
  }
  ngOnDestroy(): void {

  }

  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  onLogout() {
    this.authService.logout();
  }
  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
    this.router.navigate(['./'], { relativeTo: this.route })
  }

}



