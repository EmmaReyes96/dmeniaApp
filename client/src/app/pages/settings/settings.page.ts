import { Component, OnInit } from '@angular/core';
import { IonicAlertService } from 'src/app/services/ionic-alert.service';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { userModel } from '../../models/user.model';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  public userModel: userModel =  this.AuthService.userModel;

  User = {
    email: '',
    name: '',
  }

  uid: string;
  token: string;


  constructor(private AuthService: AuthService,
              private UserService: UserService,
              private IonicAlert: IonicAlertService
              ) {}

  ngOnInit() {    
    this.uid = this.userModel._id
    this.User.name = this.userModel.name
    this.User.email = this.userModel.email
    this.token = this.AuthService.token
  }

  Update(fUser){
    if(fUser.invalid){return;}    
    this.UserService.UserUpdate(this.uid,this.User,this.token)
    .subscribe(
      res => { 
        this.IonicAlert.presentAlert('Congratulation', 'update user') 
      }, 
      err => {
        const title = `${err.statusText}: ${err.status}`
        const msg = `${err.error.msg}`
        this.IonicAlert.presentAlert(title, msg)
      }
    )
  }

  deleteUser(){ 
    const title = 'Confirm!';
    const msg = 'sure you want to delete this account';
    this.IonicAlert.presentAlertConfirm(title, msg).then(res => {
      if(res.data){
        this.UserService.UserDelete(this.uid,this.token)
        .subscribe( 
          res => {
          this.AuthService.signOut();
          },
          err => {
            const title = `${err.statusText}: ${err.status}`
            const msg = `${err.error.msg}`
            this.IonicAlert.presentAlert(title, msg)
          } 
        )
      }
    })
  }

}
