import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutUsComponent} from './about-us/about-us.component';
import {HomeComponent} from './home/home.component';
import {KindergartenComponent} from './kindergarten/kindergarten.component';
import {EventsComponent} from './events/events.component';
import {AboutEventComponent} from './about-event/about-event.component';
import {AdminComponent} from "./admin/admin.component";
import {LoginComponent} from "./login/login.component";
import {ClubComponent} from "./club/club.component";


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'events', component: EventsComponent},
  {path: 'event', component: AboutEventComponent},
  {path: 'kindergarten', component: KindergartenComponent},
  {path: 'about', component: AboutUsComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'login', component: LoginComponent},
  {path: 'clubs/:id', component: ClubComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
