import { Component } from '@angular/core';
import { ProblemService } from '../problem-service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './report.html',
  styleUrl: './report.css',
})
export class Report {
  problem = {
    userName: '',
    phone: '',
    problemDescription: ''
  };

  constructor(
    private problemService: ProblemService,
    private router: Router
  ) {}

 submit() {
  this.problemService
    .registerProblem(this.problem)
    .subscribe({
      next: (res) => {
        console.log(res);

        alert('Problem Submitted');

        this.router.navigate(['/users']);
      },
      error: (err) => {
        console.log(err);
      }
    });
}

}
