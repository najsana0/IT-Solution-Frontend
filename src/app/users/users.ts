import { Component, OnInit } from '@angular/core';
import { ProblemService } from '../problem-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule , FormsModule],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users implements OnInit{
  
 problems: any[] = [];

  constructor(
    private problemService: ProblemService
  ) {}

  ngOnInit(): void {
  console.log('Users Loaded');

  this.problemService.getAllProblems().subscribe({
    next: (data) => {
      console.log('DATA=', data);
      this.problems = data;
    },
    error: (err) => {
      console.log('ERROR=', err);
    }
  });
}

  loadProblems() {

    this.problemService
      .getAllProblems()
      .subscribe({
        next: (data) => {
          this.problems = data;
        }
      });
  }

   start(id: number) {
  this.problemService.startProblem(id)
    .subscribe(res => {
      console.log(res);
      this.loadProblems();
    });
}

  resolve(id: number) {

    this.problemService
      .resolveProblem(id)
      .subscribe(() => {
        this.loadProblems();
      });
  }

  remove(id: number) {

    this.problemService
      .deleteProblem(id)
      .subscribe(() => {
        this.loadProblems();
      });
  }
}


