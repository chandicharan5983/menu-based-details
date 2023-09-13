import { Injectable } from '@angular/core';
import { Sport } from '../models/sport.model';

@Injectable({
  providedIn: 'root'
})
export class SportsService {
  private sports: Sport[] = [
    {
      id: 1,
      name: 'Football',
      description: 'Description for Football',
    },
    {
      id: 2,
      name: 'Basketball',
      description: 'Description for Basketball',
    },
    {
      id: 3,
      name: 'Cricket',
      description: "Cricket is a bat-and-ball game played between two teams of eleven players on a field at the centre of which is a 22-yard (20-metre) pitch with a wicket at each end, each comprising two bails balanced on three stumps. The batting side scores runs by striking the ball bowled at one of the wickets with the bat and then running between the wickets, while the bowling and fielding side tries to prevent this (by preventing the ball from leaving the field, and getting the ball to either wicket) and dismiss each batter (so they are 'out'). Means of dismissal include being bowled, when the ball hits the stumps and dislodges the bails, and by the fielding side either catching the ball after it is hit by the bat, but before it hits the ground, or hitting a wicket with the ball before a batter can cross the crease in front of the wicket. When ten batters have been dismissed, the innings ends and the teams swap roles. The game is adjudicated by two umpires, aided by a third umpire and match referee in international matches. They communicate with two off-field scorers who record the match's statistical information.",
    },
    // Add more sports
  ];

  getSports(): Sport[] {
    return this.sports;
  }

  getSportById(id: number): Sport | undefined {
    return this.sports.find((sport) => sport.id === id);
  }
}
