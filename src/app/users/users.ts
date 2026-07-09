import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ProblemService } from '../problem-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './users.html',
  styleUrls: ['./users.css']
})
export class Users implements OnInit {

  problems: any[] = [];


constructor(
  private problemService: ProblemService,
  private router: Router,
  private cdr: ChangeDetectorRef
) {}

  ngOnInit(): void {
    this.loadProblems();
  }

  loadProblems(): void {
  this.problemService.getAllProblems().subscribe({
    next: (data: any[]) => {

      console.log('API Data:', data);
      console.log('Count:', data.length);

      this.problems = [...data];

      this.cdr.detectChanges();
    },
    error: (err) => {
      console.error('Error:', err);
    }
  });
}

  start(id: number): void {
  this.problemService.startProblem(id).subscribe({
    next: () => {

      Swal.fire({
        icon: 'success',
        title: 'Started',
        text: 'Problem status changed to Serving',
        timer: 1500,
        showConfirmButton: false
      });

      this.loadProblems();
      
    }
  });
}

 resolve(id: number): void {
  this.problemService.resolveProblem(id).subscribe({
    next: () => {

      Swal.fire({
        icon: 'success',
        title: 'Resolved',
        text: 'Problem resolved successfully',
        timer: 1500,
        showConfirmButton: false
      });

      this.loadProblems();
    }
  });
}

remove(id: number): void {

  Swal.fire({
    title: 'Are you sure?',
    text: 'You want to delete this problem!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, Delete',
    cancelButtonText: 'Cancel'
  }).then((result) => {

    if (result.isConfirmed) {

      this.problemService.deleteProblem(id).subscribe({
        next: () => {

          Swal.fire({
            icon: 'success',
            title: 'Deleted!',
            text: 'Problem deleted successfully',
            timer: 1500,
            showConfirmButton: false
          });

          this.loadProblems();
        }
      });

    }

  });
} 
  openDashboard() {
  this.router.navigate(['/dashboard']);
}
}
 
