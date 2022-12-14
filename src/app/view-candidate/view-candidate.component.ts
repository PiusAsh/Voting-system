import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { candidate } from '../Models/candidate';
import { VoteService } from '../vote.service';

@Component({
  selector: 'app-view-candidate',
  templateUrl: './view-candidate.component.html',
  styleUrls: ['./view-candidate.component.css'],
})
export class ViewCandidateComponent {
  baseUrl: string = 'https://localhost:44319/';
  users: candidate[] = [];
  user: candidate = {
    id: 0,
    candidateName: '',
    party: '',
    totalVotes: 0,
  };

  constructor(private http: VoteService, private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.http.getAllCandidates().subscribe((data: any) => {
      this.users = data;
      console.log(data);
    });
  }
}
