import { Component } from '@angular/core';
import { USER_Details } from '../constants/menu-list.constant';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  userDetails = USER_Details

}
