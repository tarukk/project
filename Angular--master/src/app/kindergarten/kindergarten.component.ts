import {Component, OnInit} from '@angular/core';
import {KindergartenService} from "../shared/services/kindergarten.service";

@Component({
  selector: 'app-kindergarten',
  templateUrl: './kindergarten.component.html',
  styleUrls: ['./kindergarten.component.css']
})
export class KindergartenComponent implements OnInit {

  kindergartens : any[] = [] ;

  constructor(private kindergartenService : KindergartenService) { }

  ngOnInit() {
    this.kindergartenService.getKindergartens().subscribe(
      (res : any) => {
        this.kindergartens = res.kindergartens ;
      } ,
      err => console.log(err)
    )
  }

  getURL(picture: string) {
    return "http://127.0.0.1/Tarak/proj/Symfony-Rest-AUTH/public/uploads/" + picture
  }
}
