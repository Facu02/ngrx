import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginFormComponent } from './shared/components/login-form/login-form.component';

const routes: Routes = [
  {
    path: "",
    pathMatch:'full',
    redirectTo: "/login"
  },
  {
    path:"home",
    component:HomePageComponent,
    canActivate: [AuthGuard]
  },
  {
    path:"login",
    component: LoginFormComponent,
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
