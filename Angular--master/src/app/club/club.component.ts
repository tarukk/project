import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ClubService} from "../shared/services/club.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatTableDataSource} from "@angular/material/table";
import {Club} from "../shared/classes/Club";

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.css']
})
export class ClubComponent implements OnInit {

  id = null ;

  addForm: FormGroup;
  updateForm: FormGroup;

  toDeleteClub = null ;
  toUpdateClub = null ;

  displayedColumns: string[] = ['title','description' , 'actions' ];
  dataSource = new MatTableDataSource([]);


  constructor(private Activatedroute : ActivatedRoute , private clubService : ClubService , private formBuilder : FormBuilder) { }

  ngOnInit() {

    this.getClubs() ;

    this.addForm = this.formBuilder.group({
      title: ['',  Validators.required ],
      description: ['', Validators.required ] ,
    });

    this.updateForm = this.formBuilder.group({
      title: ['',  Validators.required ],
      description: ['', Validators.required ] ,
      kinder_garten_id: ['', Validators.required ] ,
    });



  }

  getClubs(){
    this.Activatedroute.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.clubService.getClubsByKindergartens(this.id , localStorage.getItem("token")).subscribe(
        (res : any)  => {
          this.dataSource.data = res.clubs ;
        } ,
        err => {
          console.log(err)
        }
      )
    });
  }

  add() {
    if(this.id) {
      let club : any = {} ;
      club.title = this.addForm.value.title ;
      club.description = this.addForm.value.description ;
      club.kinder_garten_id = this.id
      this.clubService.postClub(club , localStorage.getItem("token")).subscribe(
        res => {
          this.getClubs() ;
        },
        error => console.log(error)

      )
    }
  }

  select( id: any ) {
    this.toDeleteClub = id ;
  }

  selectUpdate(id: any, element: any) {
    this.toUpdateClub = id ;
    this.updateForm.setValue({
      'title': element.title,
      'description': element.description ,
      'kinder_garten_id': element.kindergarten.id
    });
  }


  delete() {
    if(this.toDeleteClub)
    {
      this.clubService.deleteClub(this.toDeleteClub , localStorage.getItem("token")).subscribe(
        (res : any) => {
          this.getClubs() ;
          this.toDeleteClub = null
        } ,
        err => console.log(err)
      )
    }

  }

  update() {
    if(this.toUpdateClub)
    {
      let club : any = {} ;
      club.id_club = this.toUpdateClub ;
      club.title = this.updateForm.value.title ;
      club.description = this.updateForm.value.description ;
      club.kinder_garten_id = this.updateForm.value.kinder_garten_id ;
      this.clubService.putClub(club , localStorage.getItem("token")).subscribe(
        (res : any) => {
          this.getClubs() ;
          this.toDeleteClub = null
        } ,
        err => console.log(err)
      )
    }
  }
}
