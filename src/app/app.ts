import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Report } from './report/report';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Report],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('serviceCenter');
}
