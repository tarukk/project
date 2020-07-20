import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwnerService } from "../shared/services/owner.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router , private ownerSrevice : OwnerService ) { }

  ngOnInit() {
  }


  logout() {
    this.ownerSrevice.logout()
    this.router.navigate(['home'])
  }

  resolve(){
    return !!localStorage.getItem("token");
  }
}
