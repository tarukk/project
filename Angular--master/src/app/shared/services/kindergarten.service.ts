import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Kindergarten } from "../classes/Kindergarten";

@Injectable({
  providedIn: 'root'
})
export class KindergartenService {

  constructor(private http : HttpClient) { }

  getKindergartens() : Observable<Kindergarten[]>{
    return this.http.get<Kindergarten[]>( '/api/kindergarten/getAll' );
  }

  getKindergartensByOwner(id : number , token : string ) : Observable<Kindergarten[]>{
    return this.http.post<Kindergarten[]>( '/api/kindergarten/getAllByOwner?owner_id=' + id + "&authorization=" + token , null);
  }

  postKindergarten(kindergarten: any , token : string) : Observable<Kindergarten>{
    return this.http.post<Kindergarten>('/api/kindergarten/new?authorization=' + token , kindergarten  );
  }

  deleteKindergarten(id : number , token : string) {
    return this.http.post('/api/kindergarten/delete?authorization=' + token + "&id_kindergarten=" + id , null );
  }

  putKindergarten(kindergarten: any , token : string) {
    return this.http.post('/api/kindergarten/edit?authorization=' + token , kindergarten );
  }

}
