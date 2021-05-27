import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-popover-info',
  templateUrl: './popover-info.component.html',
  styleUrls: ['./popover-info.component.scss'],
})
export class PopoverInfoComponent implements OnInit {

  constructor(
    private Router: Router,
    private AuthService: AuthService
    ) { }

  ngOnInit() {}
  
  setting(){
    this.Router.navigateByUrl('/home/settings')
  }

  signOut(){
    this.AuthService.signOut();
  }
}
