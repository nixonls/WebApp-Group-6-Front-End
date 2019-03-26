import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SmokerUiComponent } from './smoker-ui/smoker-ui.component';
import { HomeComponent } from './home/home.component';
import { PlannerComponent } from './planner/planner.component';
import { ProfileComponent } from './profile/profile.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'dashboard', component: SmokerUiComponent },
    { path: 'dashboard/planner', component: PlannerComponent},
    { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
