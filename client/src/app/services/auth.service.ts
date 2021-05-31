import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Storage } from '@ionic/storage';

import { User, userModel } from '../models/user.model';
import { Router } from '@angular/router';
import { SERVER_URL } from '../../environments/environment';
import { IonicAlertService } from './ionic-alert.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: string = null;
  public userModel: userModel;

  async tokenStorage() {
    this.token = await this.storage.get('token') || null;
  }

  constructor(
    private http: HttpClient,
    private storage: Storage,
    private router: Router,
    private IonicAlert: IonicAlertService
    ) 
    {
       this.storage.create();
    }

  Login(loginUser:{email: string, password: string}): Observable<User> {
    const url = `${SERVER_URL}/api/login`
    return this.http.post<User>( url, loginUser )
  } 

  Register(registerUser:{email: string, password: string, name: string}): Observable<User>{
    const url = `${SERVER_URL}/api/createUser`
    return this.http.post<User>( url, registerUser )
      
  }

  async TokenValidate(): Promise<boolean>{

    await this.tokenStorage();

    if(!this.token){
      return Promise.resolve(false);
    }

    return new Promise<boolean>( resolve => {
      const url = `${SERVER_URL}/api/login/renew`
      this.http.get<User>(url , {
        headers: {
          'x-token': this.token
        }
      }).subscribe( 
        res => {
          const {email, name, password, _id} = res.userDB
          this.userModel = new userModel( email, name, password, _id)
          this.SaveToken(res.token);
          resolve(true)
      }, rej => {
          const title = `${rej.statusText}: ${rej.status}`
          const msg = `${rej.error.msg}`
          this.IonicAlert.presentAlert(title, msg)
          resolve(false)
      })
    })
  }

 SaveToken( token: string ): Promise<boolean>{    
    this.token = token;
    return this.storage.set('token', token)
  }

  signOut(){
    this.storage.clear();
    this.router.navigateByUrl('/login');
  }



}
