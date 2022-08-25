import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentUser:any = JSON.parse(localStorage.getItem('user')!);
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  logout(){
    this.authService.signOut();
    this.currentUser = null;
  }
}
