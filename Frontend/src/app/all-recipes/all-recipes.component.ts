import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { Recipes } from '../models/recipe';

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.less']
})
export class AllRecipesComponent implements OnInit {

  recipes = <Recipes[]>[
    {
      "id": "1",
      "name": "Tor­tel­lo­ni met spi­na­zie uit de oven",
      "image": "https://static.ah.nl/static/recepten/img_013614_1600x560_JPG.jpg",
      "rating": 1,
      "category": "Hoofdgerecht",
      "duration": 30,
      "favorite": true
    },
    {
      "id": "2",
      "name": "Reu­ze­cros­ti­ni met zalm en ricotta",
      "image": "https://static.ah.nl/static/recepten/img_013615_1600x560_JPG.jpg",
      "rating": 3,
      "category": "Hoofdgerecht",
      "duration": 30,
      "favorite": false
    },
    {
      "id": "3",
      "name": "Snelle vol-au-vent",
      "image": "https://img.static-rmg.be/a/food/image/q75/w640/h400/7155/snelle-vol-au-vent.jpg",
      "rating": 4,
      "category": "Hoofdgerecht",
      "duration": 30,
      "favorite": true
    },
    {
      "id": "4",
      "name": "Reu­ze­cros­ti­ni met zalm en ricotta",
      "image": "https://static.ah.nl/static/recepten/img_013615_1600x560_JPG.jpg",
      "rating": 3,
      "category": "Hoofdgerecht",
      "duration": 30,
      "favorite": false
    },
    {
      "id": "5",
      "name": "Tor­tel­lo­ni met spi­na­zie uit de oven",
      "image": "https://static.ah.nl/static/recepten/img_013614_1600x560_JPG.jpg",
      "rating": 5,
      "category": "Hoofdgerecht",
      "duration": 30,
      "favorite": true
    },
    {
      "id": "6",
      "name": "Reu­ze­cros­ti­ni met zalm en rucola",
      "image": "https://static.ah.nl/static/recepten/img_013615_1600x560_JPG.jpg",
      "rating": 3,
      "category": "Hoofdgerecht",
      "duration": 30,
      "favorite": true
    },
    {
      "id": "6",
      "name": "Tor­tel­lo­ni met spi­na­zie uit de oven",
      "image": "https://static.ah.nl/static/recepten/img_013614_1600x560_JPG.jpg",
      "rating": 5,
      "category": "Hoofdgerecht",
      "duration": 30,
      "favorite": false
    },
    {
      "id": "7",
      "name": "Taart­je met pa­pri­ka en gei­ten­kaas",
      "image": "https://static.ah.nl/static/recepten/img_013617_1600x560_JPG.jpg",
      "rating": 3,
      "category": "Hoofdgerecht",
      "duration": 30,
      "favorite": false
    }
  ];

  sortOptions: SelectItem[];

  sortOrder: number;

  sortField: string;

  constructor() { }

  ngOnInit(): void {
    this.sortOptions = [
        {label: 'Rating High to Low', value: '!rating'},
        {label: 'Rating Low to High', value: 'rating'}
    ];
  }

  onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }
}
