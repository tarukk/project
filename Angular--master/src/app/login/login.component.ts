import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {OwnerService} from "../shared/services/owner.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  error: string = null;

  constructor(private formBuilder: FormBuilder, private router: Router, private ownerService: OwnerService) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['',  [Validators.required  , Validators.email]],
      password: ['', Validators.required ]
    });
  }


  onLogin() {
    this.ownerService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(
      response => {
        this.ownerService.saveToken(response.token) ;
        this.ownerService.saveId(response.id) ;
        this.router.navigate(['home'])
      },
      err => {
        console.log(err)
      });
  }


  logout(){
    localStorage.clear()
  }
}
