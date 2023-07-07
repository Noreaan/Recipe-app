import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-recipes',
  templateUrl: './new-recipes.component.html',
  styleUrls: ['./new-recipes.component.less']
})
export class NewRecipesComponent implements OnInit {

  image: string;
  ingredients: any[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

  addIngredient() {
    this.ingredients.push('');
  }

}
