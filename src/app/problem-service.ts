import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Problem {

  id?: number;

  userName: string;

  phone: string;

  problemDescription: string;

  status?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProblemService {

  private apiUrl =
  'https://it-solution-2ypn.onrender.com/userRegistration';

  constructor(private http: HttpClient) {}

  registerProblem(problem: Problem) {
  return this.http.post(
    `${this.apiUrl}/registerProblem`,
    problem,
    { responseType: 'text' }
  );
}
  getAllProblems() {
    return this.http.get<any[]>(
      `${this.apiUrl}/all`
    );
  }

  startProblem(id: number) {
  return this.http.put(
    `${this.apiUrl}/start/${id}`,
    {},
    { responseType: 'text' }
  );
}

resolveProblem(id: number) {
  return this.http.put(
    `${this.apiUrl}/resolve/${id}`,
    {},
    { responseType: 'text' }
  );
}

deleteProblem(id: number) {
  return this.http.delete(
    `${this.apiUrl}/delete/${id}`,
    { responseType: 'text' }
  );
}
}