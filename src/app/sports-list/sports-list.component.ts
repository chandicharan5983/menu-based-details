
import { Component, OnInit } from '@angular/core';import { Sport } from '../models/sport.model';
import { SportsService } from '../services/sports.service';
import { SportDialogService } from '../services/sport-dialog.service';

@Component({
  selector: 'app-sports-list',
  templateUrl: './sports-list.component.html',
  styleUrls: ['./sports-list.component.scss']
})
export class SportsListComponent implements OnInit {
  sports: Sport[] = [];
  selectedSport: Sport | null = null; 

  constructor(private sportsService: SportsService, public dialogService: SportDialogService) {}

  ngOnInit(): void {
    // Fetch the list of sports from the SportsService
    this.sports = this.sportsService.getSports();
  }

  openSportDialog(sport: Sport) {
    this.selectedSport = sport; // Store the selected sport
    this.dialogService.openDialog();
  }
}