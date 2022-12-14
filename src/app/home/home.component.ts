import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TitleStrategy } from '@angular/router';
import { candidate, candidateCount } from '../Models/candidate';
import { VoteService } from '../vote.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  baseUrl: string = 'https://localhost:44319/';
  users: candidate[] = [];
  count: candidateCount = {
    id: 0,
    count: 0,
  };
  user: candidate = {
    id: 0,
    candidateName: '',
    party: '',
    totalVotes: 0,
  };
  registerForm!: FormGroup;
  countForm!: FormGroup;
  res: any;
  constructor(private http: VoteService, private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      candidateName: ['', Validators.required],
      party: ['', Validators.required],
    });
    this.countForm = this.formBuilder.group({
      id: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    this.http.getAllCandidates().subscribe((data: any) => {
      this.users = data;
      console.log(data);
    });
  }
  Register() {
    this.user = this.registerForm.value;
    //this.registerForm.value.isAdmin == true;
    console.log(this.registerForm.value, ' CHECKING USER');
    this.http.Register(this.user).subscribe((res: any) => {
      this.user = res;
      alert(res.message);
      this.registerForm.reset();
      window.location.reload();
    });
  }
  Count() {
    console.log('$$', this.countForm.value);
    this.count = this.countForm.value;
    this.countForm.value.id = parseInt(this.countForm.value.id);
    console.log(this.countForm.value);
    console.log(this.count, ' CHECKING COUNT');
    this.http.Vote(this.countForm.value).subscribe((res: any) => {
      this.res = res;
      alert(res.message);
      this.countForm.reset();

      if (this.res.code === 0) {
        window.location.reload();
      }
    });
  }
}
