import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SportsService } from '../services/sports.service';
import { Sport } from '../models/sport.model';
import { SportDialogService } from '../services/sport-dialog.service';

@Component({
  selector: 'app-sport-detail',
  templateUrl: './sport-detail.component.html',
  styleUrls: ['./sport-detail.component.scss']
})
export class SportDetailComponent {

  sport: Sport | undefined;

  constructor(
    private route: ActivatedRoute,
    private sportsService: SportsService,
    private dialogService: SportDialogService
  ) {
    this.dialogService.closeDialog();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const sportId = parseInt(params.get('id') || '', 10);
      if (!isNaN(sportId)) {
        this.sport = this.sportsService.getSportById(sportId);
      }
    });
  }
}
