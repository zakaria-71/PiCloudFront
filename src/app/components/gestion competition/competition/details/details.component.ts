import {Component, OnInit} from '@angular/core';
import {CompetitionService} from "../../services/competition.service";
import {ActivatedRoute} from "@angular/router";
import {Vote} from "../../models/vote.model";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls:['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id: any;
  competition:any;
  review:Vote={
    note:0
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['competitionId'];
    this.compService.getCompetition(this.id).subscribe(
      data => {
        this.competition = data;
        console.log(this.competition?.teams);
        this.competition?.teams.forEach((team: any) => {
          let totalReviews = 0;
          team.votes.forEach((review: any) => {
            totalReviews += review.note;
          });
          if (team.votes.length > 0) {
            team.averageVote = totalReviews / team?.votes.length;
            console.log(team?.averageVote);
          } else {
            team.averageVote = 0;
          }
        });
      }
    );
  }
  calculateStarDisplay(team: any): number {
    let totalReviews = 0;
    team.votes.forEach((review: any) => {
      totalReviews += review.note;
    });
    const averageVote = totalReviews / team.votes.length;
    return Math.round(averageVote * 2) / 2;
  }

  constructor(
    private compService: CompetitionService,
    public route: ActivatedRoute
  ) { }
  handleRatingClick(event: MouseEvent, teamId: any) {
    this.review.note = parseInt((event.target as HTMLInputElement).value, 10);
    this.compService.createVote(teamId, this.id, 1, this.review).subscribe(
      data => {
        console.log("Vote created:", data);
        console.log(teamId);
      },
      error => {
        console.error("Error creating vote:", error);
      }
    );
  }


  protected readonly Math = Math;
  isHighestVoteTeam(team: any): boolean {
    if (!team || !team?.votes || team?.votes.length === 0) {
      return false; // No votes or invalid team
    }

    // Calculate the average vote for the current team
    const totalVotes = team?.votes.reduce((acc: number, vote: any) => acc + vote.note, 0);
    const averageVote = totalVotes / team?.votes.length;

    const highestAverageVote = this.competition?.teams.reduce((highest: number, t: any) => {
      const tTotalVotes = t.votes.reduce((acc: number, vote: any) => acc + vote.note, 0);
      const tAverageVote = tTotalVotes / t.votes.length;
      return tAverageVote > highest ? tAverageVote : highest;
    }, 0);

    return averageVote === highestAverageVote;
  }

}
