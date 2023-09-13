import { Component, HostListener, Input } from '@angular/core';
import { Sport } from '../models/sport.model';
import { SportDialogService } from '../services/sport-dialog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sport-dialog',
  templateUrl: './sport-dialog.component.html',
  styleUrls: ['./sport-dialog.component.scss']
})
export class SportDialogComponent {
  @Input() sport!: Sport | any;

  constructor(private router: Router, private dialogService: SportDialogService) {}

  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    this.closeDialog();
  }

  navigateToSportDetails() {
    // Close the dialog and navigate to the sport details page
    this.router.navigate(['/sports', this.sport.id]);
  }

  closeDialog() {
    // Close the dialog without navigation
    this.dialogService.closeDialog();
    this.router.navigate(['/sports']);
  }
}
