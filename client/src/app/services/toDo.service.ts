import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SERVER_URL } from '../../environments/environment';
import { toDoModel, toDo } from '../models/toDo.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class toDoService {

    toDoModel: toDoModel[] = [];

    constructor(private http: HttpClient) { }  

    listToDo(id: string, token: string): Observable<toDo>{
        const url = `${SERVER_URL}/api/listToDo/${id}`
        return this.http.get<toDo>(url, {
            headers: {
                'x-token': token
            }
        })
    };

    newToDo(id: string, token: string, txt: string): Observable<toDo>{
        const url = `${SERVER_URL}/api/newToDo/${id}`
        return this.http.post<toDo>(url, {txt}, {
            headers: {
                'x-token': token
            }
        })
    };

    updateToDo( task: {_id: string, checkOut: boolean} , token: string): Observable<toDo>{
        const url = `${SERVER_URL}/api/updateToDo`
        return  this.http.put<toDo>(url, task, {
            headers: {
                'x-token': token
            }
        })
    };

    deleteToDo(id: string, token: string): Observable<toDo>{
        const url = `${SERVER_URL}/api/deleteToDo/${id}`
        return  this.http.delete<toDo>(url, {
            headers: {
                'x-token': token
            }
        })
    };






}