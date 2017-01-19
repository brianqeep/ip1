import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  template: `
  <h1>Track your meal</h1>
  <p>Name: {{mealName}}</p>
  <p>Details: {{mealDetails}}</p>
  <p>Calories: {{mealCalories}}</p>
  <hr>

  <form (submit)="addMeal(meal.value)">
    <label>Add meal</label>
    <input type = "text" #meal placeholder="(name) (details) (calories)">
  </form>

  <ol>
    <li *ngFor = "let meal of meals">
      {{meal}}
    </li>
  </ol>
  `
})

export class AppComponent {
    mealName: string;
    mealDetails: string;
    mealCalories: number;
    meals: string[];
  constructor (){
    this.mealName = "Burger";
    this.mealDetails = "Cheese burger";
    this.mealCalories = 350;
    this.meals = ["Fries Curly 500", "Banana two 60"];
  }
  addMeal(meal){
    this.meals.push(meal);
  }
}
