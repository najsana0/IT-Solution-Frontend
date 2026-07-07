import { Component, OnInit } from '@angular/core';
import { ProblemService } from '../problem-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class Dashboard implements OnInit {

  problems: any[] = [];

  waitingCount = 0;
  servingCount = 0;
  resolvedCount = 0;

  constructor(private problemService: ProblemService) {}

  ngOnInit(): void {
      console.log("Dashboard Loaded");
    this.loadProblems();
  }

  loadProblems(): void {
    this.problemService.getAllProblems().subscribe({
      next: (data: any[]) => {

        console.log('Dashboard Data = ', data);

        this.problems = data;

        this.waitingCount =
          data.filter(x => x.status?.toLowerCase() === 'waiting').length;

        this.servingCount =
          data.filter(x => x.status?.toLowerCase() === 'serving').length;

        this.resolvedCount =
          data.filter(x => x.status?.toLowerCase() === 'resolved').length;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}