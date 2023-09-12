import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-component',
  templateUrl: './icon-component.component.html',
  styleUrls: ['./icon-component.component.scss']
})
export class IconComponentComponent implements OnInit {

  @Input() url!: string;
  @Input() icon!: string;

  constructor() {}

  ngOnInit(): void {
    
  }

  onIconClick(url: string) {
    window.open(url, '_blank');
  }


}
