import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Storage } from '@ionic/storage';

import { User, userModel } from '../models/user.model';
import { Router } from '@angular/router';
import { SERVER_URL } from '../../environments/environment';
import { IonicFunctionsService } from './ionic-functions.service';


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
    private fIonic: IonicFunctionsService
    ) 
    {
       this.storage.create();
    }

  Login(loginUser:{email: string, password: string}) {
    const url = `${SERVER_URL}/api/login`
    this.http.post<User>( url, loginUser ).subscribe( resp => {
      if(resp.ok){
        this.SaveToken(resp.token).then(res => {
          this.router.navigateByUrl('/home')
        }).catch(err => {
          console.log(err);
        })
        
      }
    }, err => {
        this.token = null;
        this.storage.clear();
        this.fIonic.presentAlert('Alert', err['error'].msg)
    })   
  } 

  Register(registerUser:{email: string, password: string, name: string}){
    const url = `${SERVER_URL}/api/createUser`
    this.http.post<User>( url, registerUser )
      .subscribe( resp => {
        if(resp.ok){
          this.SaveToken(resp.token).then(res => {
            this.router.navigateByUrl('/home')
          }).catch(err => {
            console.log(err);
          })
        }
      }, err => {
          this.token = null;
          this.storage.clear();
          this.fIonic.presentAlert( 'Alert' ,err['error'].msg)
      })
  }

  async TokenValidate(): Promise<boolean>{

    await this.tokenStorage();

    if(!this.token){
      return Promise.resolve(false);
    }

    return new Promise<boolean>( res => {
      const url = `${SERVER_URL}/api/login/renew`
      this.http.get<User>(url , {
        headers: {
          'x-token': this.token
        }
      }).subscribe(resp => {
        if(resp.ok) {
          const {email, name, password, _id} = resp.userDB
          this.userModel = new userModel( email, name, password, _id)
          this.SaveToken(resp.token);
          res(true)
        }else{
          res(false)
        }
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
