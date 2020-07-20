import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import {Owner} from "../classes/Owner";

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  token : string = null ;
  id : number = null
  constructor(private http : HttpClient) { }

  register( owner : Owner) : Observable<any>{
    return this.http.post<any>("/api/owner/new" , owner );
  }

  login(email : string , password : string ) : Observable<any>{
    let data = {
      email : email ,
      password : password
    };
    return this.http.post<any>("/api/login" , data );
  }

  saveToken( token ) {
    this.token = token ;
    localStorage.setItem("token", token);
  }

  saveId( id ) {
    this.id = id ;
    localStorage.setItem("id", id);
  }

  logout() {
    localStorage.clear()
  }

}
