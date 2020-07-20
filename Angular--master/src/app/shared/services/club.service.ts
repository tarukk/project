import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {Club} from "../classes/Club";
import {Kindergarten} from "../classes/Kindergarten";

@Injectable({
  providedIn: 'root'
})
export class ClubService {

  constructor(private http : HttpClient) { }

  // getClubs() : Observable<Club[]>{
  //   return this.http.get<Club[]>('chatbot' );
  // }

  getClubsByKindergartens(id : number , token : string ) : Observable<Kindergarten[]>{
    return this.http.post<Kindergarten[]>( '/api/club/getAllBykindergarten?authorization=' + token + "&id_kindergarten=" + id , null);
  }

  postClub(club : any , token : string) : Observable<Kindergarten>{
    return this.http.post<Kindergarten>('/api/club/new?authorization=' + token , club  );
  }

  deleteClub(id : number , token : string) {
    return this.http.post('/api/club/delete?authorization=' + token + "&id_club=" + id , null );
  }

  putClub(club: any , token : string) {
    return this.http.put('/api/club/edit?authorization=' + token , club );
  }

}
