import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: any;

  constructor(private httpClient: HttpClient,
              private router: Router) { }

  ngOnInit(): void {
    this.httpClient.get('/assets/data/recipes.json').subscribe(recipes => {
      this.recipes = recipes;
      this.recipes.sort((a, b) => a.country.localeCompare(b.country) || a.name.localeCompare(b.name));
    });
  }

  goToRecipe(recipe: any) {
    this.router.navigate(['/recipe'], {state: {data: recipe}});
  }
}
