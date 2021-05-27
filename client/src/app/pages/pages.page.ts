import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.page.html',
  styleUrls: ['./pages.page.scss'],
})
export class PagesPage implements OnInit {

  constructor(private AuthService: AuthService) { }

  ngOnInit() {
  }

  signOut(){
    this.AuthService.signOut();
  }

}
