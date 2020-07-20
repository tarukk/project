import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { TopbarComponent } from './topbar/topbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { HomeKindergartenComponent } from './home-kindergarten/home-kindergarten.component';
import { HomeGalleryComponent } from './home-gallery/home-gallery.component';
import { HomeEventsComponent } from './home-events/home-events.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { KindergartenComponent } from './kindergarten/kindergarten.component';
import { SingleKindergartenComponent } from './single-kindergarten/single-kindergarten.component';
import { EventsComponent } from './events/events.component';
import { SingleEventsComponent } from './single-events/single-events.component';
import { AboutEventComponent } from './about-event/about-event.component';
import { AdminComponent } from './admin/admin.component';
import {HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './login/login.component';
import { MatDialogModule} from "@angular/material/dialog";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import { ClubComponent } from './club/club.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    TopbarComponent,
    NavbarComponent,
    BannerComponent,
    HomeBannerComponent,
    HomeKindergartenComponent,
    HomeGalleryComponent,
    HomeEventsComponent,
    FooterComponent,
    AboutUsComponent,
    KindergartenComponent,
    SingleKindergartenComponent,
    EventsComponent,
    SingleEventsComponent,
    AboutEventComponent,
    AdminComponent,
    LoginComponent,
    ClubComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
