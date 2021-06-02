import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SERVER_URL } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  

  constructor( private http: HttpClient) { }

  getCode(numeroDeCodigo){
    const url = `${SERVER_URL}/api/res/${numeroDeCodigo}`
    return this.http.get(url).toPromise()   
  }

}
