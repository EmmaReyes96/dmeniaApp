import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { SERVER_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient) { }

  UserUpdate(uid: string, user: {name: string, email: string}, token): Observable<User>{
    const url = `${SERVER_URL}/api/editUser/${uid}`
    return this.http.put<User>(url, user, {
      headers:{
        'x-token': token
      }
    })
  }

  UserDelete(uid: string, token){
    const url = `${SERVER_URL}/api/deleteUser/${uid}`
    return this.http.delete(url,{
      headers:{
        'x-token': token
      }
    })
  }
  


}
