import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SportDialogService {

  constructor() { }

  private isDialogOpen = false;

  openDialog() {
    this.isDialogOpen = true;
  }

  closeDialog() {
    this.isDialogOpen = false;
  }

  isDialogOpened() {
    return this.isDialogOpen;
  }
}
