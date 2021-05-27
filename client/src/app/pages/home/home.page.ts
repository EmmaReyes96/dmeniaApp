import { Component, OnInit } from '@angular/core';
import { IonicFunctionsService } from '../../services/ionic-functions.service';
import { userModel } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private AuthService: AuthService
    ) { }

  public userModel: userModel = this.AuthService.userModel

  ngOnInit() {
  }

}
