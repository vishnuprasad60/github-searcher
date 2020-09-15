import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {environment} from './../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ReposComponent } from './components/repos/repos.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { HomeComponent } from './pages/home/home.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AngularFireAuthModule} from '@angular/fire/auth';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import { AngularFireModule } from '@angular/fire';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ReposComponent,
    UserCardComponent,
    HomeComponent,
    PagenotfoundComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
