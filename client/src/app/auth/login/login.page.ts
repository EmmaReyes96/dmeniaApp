import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { IonicAlertService } from '../../services/ionic-alert.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild( 'SlideOne', { static: true } ) slides: IonSlides;

  loguinUser = {
    email: '',
    password: ''
  }

  registerUser = {
    email: '', 
    password: '',
    name: ''
  }

  constructor(
    private AuthService: AuthService,
    private storage: Storage,
    private router: Router,
    private IonicAlert: IonicAlertService
    ) {}

  ngOnInit() {
    this.slides.lockSwipes( true );
  }

  Login(fLoguin){
    if(fLoguin.invalid){return;}    
    this.AuthService.Login(this.loguinUser)
    .subscribe( 
      res => {
        this.AuthService.SaveToken(res.token).then( () => {
          this.router.navigateByUrl('/home')
          }).catch( err => {
          this.IonicAlert.presentAlert('token', 'not save')
          })
      }, 
      err => {
        this.AuthService.token = null;
        this.storage.clear();
        const title = `${err.statusText}: ${err.status}`
        const msg = `${err.error.msg}`
        this.IonicAlert.presentAlert(title, msg)
      }
    )
  }

  Register(fRegister){
    if(fRegister.invalid){return;}
    this.AuthService.Register(this.registerUser)
      .subscribe(
        res => {
          this.AuthService.SaveToken(res.token).then( () => {
            this.router.navigateByUrl('/home')
          }).catch(err => {
            this.IonicAlert.presentAlert('token', 'not save')
          })
        }, 
        err => {
          this.AuthService.token = null;
          this.storage.clear();
          const title = `${err.statusText}: ${err.status}`
          const msg = `${err.error.msg}`
          this.IonicAlert.presentAlert(title, msg)
        }
      )
  }

  nextRegister(){
    this.slides.lockSwipes(false);
    this.slides.slideTo(1)
    this.slides.lockSwipes(true);
  }

  
  previousLogin(){
    this.slides.lockSwipes(false);
    this.slides.slideTo(0)
    this.slides.lockSwipes(true);
  }

}
