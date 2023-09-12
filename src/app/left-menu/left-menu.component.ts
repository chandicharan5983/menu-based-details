import { Component } from '@angular/core';
import { MENU_LIST_INTERFACE } from '../interfaces/layout.interface';
import { NavigationEnd, Router } from '@angular/router';
import { MENU_LIST } from '../constants/menu-list.constant';
import { filter } from 'rxjs';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent {


  menuList!: Array<MENU_LIST_INTERFACE>;
  currentUrl : string = 'sports';

  constructor(
    private router: Router,
    ) { 
      this.menuList = MENU_LIST;
      this.getUpdatedUrl();
  }


  ngOnInit(): void {
  }
  
  getUpdatedUrl() {
    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentUrl = event.url ?? 'sports';
      });
  }

  navigateTo(page: string): void {
    this.router.navigateByUrl(page);
  }

}
