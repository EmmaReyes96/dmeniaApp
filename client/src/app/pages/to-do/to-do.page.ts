import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { toDoService } from '../../services/toDo.service';
import { userModel } from '../../models/user.model';

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
    private toDoService: toDoService

  ) { }
  
  ngOnInit() {  
   this.listToDo()
  }
  
  listToDo(){
    this.toDoService.listToDo(this.uid, this.token).subscribe( res => { 
      this.toDoModel = res.toDoDB
      this.txtValue = ''
    })
  }

  Save(txtValue){
    if(txtValue != ''){
      this.toDoService.newToDo(this.uid, this.token, txtValue).subscribe(() => {this.listToDo();})
    }
  }

  Checked(item:{ _id : string, checkOut: boolean  }){
    const task = { 
      _id : item._id,
      checkOut: !item.checkOut 
    }
    this.toDoService.updateToDo( task , this.token).subscribe(() => {this.listToDo();})
  }

  deleteTask(item){
    this.toDoService.deleteToDo(item._id, this.token).subscribe(() => {this.listToDo();})
  }

}
