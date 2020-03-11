import { Component, OnInit } from '@angular/core';
import {Recipe} from './../../../../app/models/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes : Recipe[]=  [
    new Recipe('test title', 'test description', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
    new Recipe('test title', 'test description', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg')

  ];

  constructor() { }

  ngOnInit() {
  }

}
