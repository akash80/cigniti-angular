import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }
  
  currentUser:any = JSON.parse(localStorage.getItem('user')!);

  title:string = "Profile Page ! Hi, "+(this.currentUser && this.currentUser.email ? this.currentUser.email : '');

  ngOnInit(): void {
  }

}
