import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router,} from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanActivate {

constructor(  
  private AuthService: AuthService,
  private router: Router
  ){}

  async canActivate():Promise<boolean>{
    return this.AuthService.TokenValidate().then(res => {
      if(!res){
        this.router.navigateByUrl('/login')
        return res
      }
      return res
    })
  }
}
