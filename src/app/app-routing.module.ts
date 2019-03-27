import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SmokerUiComponent } from './components/smoker-ui/smoker-ui.component';
import { HomeComponent } from './components/home/home.component';
import { PlannerComponent } from './components/planner/planner.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AuthGuard } from './services/auth.guard';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'auth/login', component: LoginComponent },
    { path: 'auth/register', component: RegisterComponent },
    { path: 'auth/logout', component: LogoutComponent, canActivate: [AuthGuard] },
    { path: 'dashboard', component: SmokerUiComponent, canActivate: [AuthGuard] },
    { path: 'dashboard/planner', component: PlannerComponent, canActivate: [AuthGuard]},
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
    { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
