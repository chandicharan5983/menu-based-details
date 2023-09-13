
import { Component, OnInit } from '@angular/core';import { Sport } from '../models/sport.model';
import { SportsService } from '../services/sports.service';

@Component({
  selector: 'app-sports-list',
  templateUrl: './sports-list.component.html',
  styleUrls: ['./sports-list.component.scss']
})
export class SportsListComponent implements OnInit {
  sports: Sport[] = [];

  constructor(private sportsService: SportsService) {}

  ngOnInit(): void {
    // Fetch the list of sports from the SportsService
    this.sports = this.sportsService.getSports();
  }
}