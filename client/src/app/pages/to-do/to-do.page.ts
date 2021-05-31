import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { toDoService } from '../../services/toDo.service';
import { userModel } from '../../models/user.model';
import { IonicAlertService } from '../../services/ionic-alert.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.page.html',
  styleUrls: ['./to-do.page.scss'],
})
export class ToDoPage implements OnInit {
  
  txtValue: string = '';

  token: string = this.AuthService.token;
  uid: string = this.AuthService.userModel._id;

  userModel: userModel = this.AuthService.userModel;
  toDoModel: [any];

  constructor(
    private AuthService: AuthService,
    private toDoService: toDoService,
    private IonicAlert: IonicAlertService

  ) { }
  
  ngOnInit() {  
   this.listToDo()
  }
  
  listToDo(){
    this.toDoService.listToDo(this.uid, this.token)
    .subscribe( 
      res => { 
        this.toDoModel = res.toDoDB
        this.txtValue = ''
      },
      err => {
        const title = `${err.statusText}: ${err.status}`
        const msg = `${err.error.msg}`
        this.IonicAlert.presentAlert(title, msg)
      }
    )
  }

  Save(txtValue){
    if(txtValue != ''){
      this.toDoService.newToDo(this.uid, this.token, txtValue)
      .subscribe( 
        res => {
          this.listToDo();
        },
        err => {
          const title = `${err.statusText}: ${err.status}`
          const msg = `${err.error.msg}`
          this.IonicAlert.presentAlert(title, msg)
        }
      )
    }
  }

  Checked(item:{ _id : string, checkOut: boolean  }){
    const task = { 
      _id : item._id,
      checkOut: !item.checkOut 
    }
    this.toDoService.updateToDo( task , this.token)
      .subscribe(
        res => {
          this.listToDo();
        },
        err => {
          const title = `${err.statusText}: ${err.status}`
          const msg = `${err.error.msg}`
          this.IonicAlert.presentAlert(title, msg)
        }
      )
  }

  deleteTask(item){
    this.toDoService.deleteToDo(item._id, this.token)
    .subscribe(
      res => {
        this.listToDo();
      },
      err => {
        const title = `${err.statusText}: ${err.status}`
        const msg = `${err.error.msg}`
        this.IonicAlert.presentAlert(title, msg)
      }
    )
  }

}
