import { Component } from '@angular/core';
import { ProblemService } from '../problem-service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

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

        Swal.fire({
          icon: 'success',
          title: 'Problem Submitted!',
          text: 'Your complaint has been registered successfully.',
          showConfirmButton: false,
          timer: 2000
        }).then(() => {
          this.router.navigate(['/users']);
        });
      },

      error: (err) => {
        console.log(err);

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Failed to submit problem!'
        });
      }
    });
}

}
