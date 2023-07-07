import { Component, OnInit } from '@angular/core';
declare var Quill: any;

@Component({
  selector: 'app-detail-recipe',
  templateUrl: './detail-recipe.component.html',
  styleUrls: ['./detail-recipe.component.less']
})
export class DetailRecipeComponent implements OnInit {
  comments: string[];
  comment: string;
  favorite: boolean;

  constructor() { }

  ngOnInit(): void {
    this.comments = <string[]>[];
    this.comment = '';
  }

  addComment() {
    this.comments.push(this.comment);
    this.comment = '';
  }

}
