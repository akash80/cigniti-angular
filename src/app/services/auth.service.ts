import { Injectable, NgZone } from '@angular/core';
import { User } from '../model/user';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any;
  constructor(
    public ngZone: NgZone, 
    public angularFirestore: AngularFirestore, 
    public angularFireAuth: AngularFireAuth,
    public router: Router,
  ) {
    this.angularFireAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
      } else {
        localStorage.setItem('user', 'null');
      }
    });
  }

  async login(email: string, password: string){
    return this.angularFireAuth
      .signInWithEmailAndPassword(email, password).then((result:any) => {
        this.userData = result.user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        this.router.navigate(['profile']);
      })
      .catch((error) => {
        return error.message;
      });
  }

  async signUp(email: string, password: string) {
    return this.angularFireAuth.createUserWithEmailAndPassword(email, password)
      .then((result:any) => {
        this.userData = result.user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        this.router.navigate(['profile']);
      })
      .catch((error) => {
        return error.message;
      });
  }

  async signOut() {
    return this.angularFireAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    });
  }

  async checkLogin(){
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null ? true : false;
  }

  async getUser(){
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null ? user : null;
  }

}
