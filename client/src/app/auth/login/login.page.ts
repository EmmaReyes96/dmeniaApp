import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';

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

  constructor(private AuthService: AuthService,) {}

  ngOnInit() {
    this.slides.lockSwipes( true );
  }

  Login(fLoguin){
    if(fLoguin.invalid){return;}    
    this.AuthService.Login(this.loguinUser)
  }

  Register(fRegister){
    if(fRegister.invalid){return;}
    this.AuthService.Register(this.registerUser);
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
