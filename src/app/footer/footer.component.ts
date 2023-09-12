import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  linkedIn: string = 'https://www.linkedin.com/company/larsen-&-toubro-limited/';
  fb: string = 'https://www.facebook.com/lnthcp/';
  twitter: string = 'https://twitter.com/larsentoubro';

}
