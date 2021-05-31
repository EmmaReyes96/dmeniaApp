import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SERVER_URL } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  

  constructor( private http: HttpClient) { }

  res200(): Promise<any> {
    const url = `${SERVER_URL}/api/res200`
    return this.http.get(url).toPromise()
  }
  res201(): Promise<any> {
    const url = `${SERVER_URL}/api/res201`
    return this.http.get(url).toPromise()
  }
  res301(): Promise<any> {
    const url = `${SERVER_URL}/api/res301`
    return this.http.get(url).toPromise()
  }
  res400(): Promise<any> {
    const url = `${SERVER_URL}/api/res400`
    return this.http.get(url).toPromise()
  }
  res404(): Promise<any> {
    const url = `${SERVER_URL}/api/res404`
    return this.http.get(url).toPromise()
  }
  res418(): Promise<any> {
    const url = `${SERVER_URL}/api/res418`
    return this.http.get(url).toPromise()
  }
  res500(): Promise<any> {
    const url = `${SERVER_URL}/api/res500`
    return this.http.get(url).toPromise()
   
  }

}
