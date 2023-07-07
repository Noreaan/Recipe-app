import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'recipe';
  
  items: MenuItem[];

  constructor() {
  }

  ngOnInit() {
    this.items = [
      {
          label: 'Recipes',
          routerLink: ['/all'], 
          routerLinkActiveOptions: { exact: true }
      },
      {
          label: 'Favorites',
          icon: 'pi pi-fw pi-star',
          routerLink: ['/favorites'],
          routerLinkActiveOptions: { exact: true } 
      },
      {
          label: 'New',
          icon: 'pi pi-fw pi-plus',
          routerLink: ['/new'], 
          routerLinkActiveOptions: { exact: true } 
      }
  ];
  }
}
