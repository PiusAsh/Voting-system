import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { candidate } from './Models/candidate';


@Injectable({
  providedIn: 'root',
})
export class VoteService {
  baseUrl: string = 'https://localhost:44319/';
  constructor(private http: HttpClient) {}

  Register(register: candidate): Observable<candidate> {
    return this.http.post<candidate>(
      this.baseUrl + 'RegisterCandidate',
      register
    );
  }
  Vote(vote: candidate): Observable<candidate> {
    return this.http.post<candidate>(this.baseUrl + 'CandidateCount', vote);
  }

  getAllCandidates(): Observable<candidate[]> {
    return this.http.get<candidate[]>(this.baseUrl + 'GetAllCandidates');
  }
  DeleteCandidate(id: candidate): Observable<any> {
    return this.http.delete<any>(this.baseUrl + '/UpdateCandidate' + id);
  }
}
