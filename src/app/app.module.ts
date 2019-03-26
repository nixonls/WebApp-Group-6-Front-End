import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NavbarComponent } from './navbar/navbar.component';
import { TabComponent } from './tab/tab.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './app-routing.module';

import { SmokerUiComponent } from './smoker-ui/smoker-ui.component';
import { TotdBarComponent } from './totd-bar/totd-bar.component';
import { PlannerComponent } from './planner/planner.component';

import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { PlannerInputComponent } from './planner-input/planner-input.component';

import { FooterComponent } from './footer/footer.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    TabComponent,
    LoginComponent,
    RegisterComponent,
    SmokerUiComponent,
    TotdBarComponent,
    PlannerComponent,
    ProfileComponent,
    PlannerInputComponent,
    FooterComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatSidenavModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
