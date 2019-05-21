import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent} from './login//login/login.component';
import { SignupComponent} from './signup/signup.component';


const appRoutes: Routes = [
  {path : "", component: HomeComponent},
  {path : "login", component: LoginComponent},
  {path : "signup", component: SignupComponent}
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent,HomeComponent,LoginComponent,SignupComponent  ],
  providers: [],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
