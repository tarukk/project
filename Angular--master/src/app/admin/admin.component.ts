import { Component, OnInit } from '@angular/core';
import { KindergartenService } from "../shared/services/kindergarten.service";
import {Kindergarten} from "../shared/classes/Kindergarten";
import {MatTableDataSource} from "@angular/material/table";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {OwnerService} from "../shared/services/owner.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  addForm: FormGroup;
  updateForm: FormGroup;

  toDeletekindergarten = null ;
  toUpdatekidergarten = null ;

  displayedColumns: string[] = ['name','description','address','ratingNote','avalability','tags','capacity','nbChildrenRegistered', 'picture', 'nbChildrenRegistered','actions' ];
  dataSource = new MatTableDataSource([]);

  constructor(private kindergartenService  :  KindergartenService , private formBuilder: FormBuilder) { }



  ngOnInit() {
    this.getKindergartens() ;

    this.addForm = this.formBuilder.group({
      name: ['',  Validators.required ],
      description: ['', Validators.required ] ,
      capacity: ['',  Validators.required ],
      avalability: ['', Validators.required ],
      ratingNote: ['',  Validators.required ],
      address: ['', Validators.required ] ,
      tags: ['', Validators.required ] ,
      nbChildrenRegistered: ['', Validators.required ] ,
      picture : ['', Validators.required] ,
      doucmentEvidenceTva : ['', Validators.required] ,
    });

    this.updateForm = this.formBuilder.group({
      name: ['',  Validators.required ],
      description: ['', Validators.required ] ,
      capacity: ['',  Validators.required ],
      avalability: ['', Validators.required ],
      ratingNote: ['',  Validators.required ],
      address: ['', Validators.required ] ,
      tags: ['', Validators.required ] ,
      nbChildrenRegistered: ['', Validators.required ] ,
    });
  }

  getKindergartens() {
    this.kindergartenService.getKindergartensByOwner(Number(localStorage.getItem("id")) , localStorage.getItem("token")).subscribe(
      (res : any) => {
        this.dataSource.data = res.kindergartens ;
        } ,
      err => console.log(err)
    )
  }

  delete() {
    if(this.toDeletekindergarten)
    {
      this.kindergartenService.deleteKindergarten(this.toDeletekindergarten , localStorage.getItem("token")).subscribe(
        (res : any) => {
          this.getKindergartens() ;
          this.toDeletekindergarten = null
        } ,
        err => console.log(err)
      )
    }

  }

  select(id: any) {
    this.toDeletekindergarten = id ;
  }

  add() {
    if (this.addForm.invalid) {
      return;
    }
    const postData = new FormData();
    postData.append("name", this.addForm.value.name);
    postData.append("description", this.addForm.value.description);
    postData.append("picture", this.addForm.value.picture, this.addForm.value.name);
    postData.append("doucmentEvidenceTva", this.addForm.value.doucmentEvidenceTva, this.addForm.value.name);
    postData.append("capacity", this.addForm.value.capacity);
    postData.append("avalability", this.addForm.value.avalability);
    postData.append("ratingNote", this.addForm.value.ratingNote);
    postData.append("address", this.addForm.value.address);
    postData.append("tags", this.addForm.value.tags);
    postData.append("nb_children_registered" , this.addForm.value.nbChildrenRegistered)

    this.kindergartenService.postKindergarten(postData , localStorage.getItem("token")).subscribe(
      res => {
        this.getKindergartens() ;
        console.log(res)
      } ,
      err => console.log(err)
    )
  }

  onPickImage(event : Event){
    const file = (event.target as HTMLInputElement).files[0] ;
    this.addForm.patchValue({picture : file}) ;
    // this.form.get('image').updateValueAndValidity() ;
    const reader = new FileReader();
    reader.onload = () => {
      // this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  onGetPDF(event : Event){
    const file = (event.target as HTMLInputElement).files[0] ;
    this.addForm.patchValue({ doucmentEvidenceTva : file}) ;
    // this.form.get('image').updateValueAndValidity() ;
    const reader = new FileReader();
    reader.onload = () => {
      // this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  getURL(picture: string) {
    let pic =  "http://127.0.0.1/proj/Symfony-Rest-AUTH/public/uploads/" + picture ;
    return pic
  }

  update() {
    if(this.toUpdatekidergarten)
    {
      let kg : any = {} ;
      kg = this.updateForm.value ;
      kg.id = this.toUpdatekidergarten ;
      console.log(kg)
      this.kindergartenService.putKindergarten(kg , localStorage.getItem("token")).subscribe(
        res =>{
          this.getKindergartens() ;
          this.toUpdatekidergarten = null
        },
        err =>{
          console.log(err)
        }
      )
    }
  }

  selectUpdate(id: any, element: any) {
    this.toUpdatekidergarten = id ;
    this.updateForm.setValue({
      'name': element.name,
      'description': element.description ,
      'capacity': element.capacity ,
      'avalability': element.avalability,
      'ratingNote': element.ratingNote ,
      'address': element.address ,
      'tags': element.tags,
      'nbChildrenRegistered': element.nbChildrenRegistered ,
    });
  }
}
