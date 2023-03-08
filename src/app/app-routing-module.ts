import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivateComponent } from './activate/activate.component';
import { LoginComponent } from './login/login.component';
import { ResendActivationCodeComponent } from './resend-activation-code/resend-activation-code.component';
import { SignUpComponent } from "./sign-up/sign-up.component"

const routes: Routes = [
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"signUp",
    component:SignUpComponent
  },
  {
    path:"activate",
    component:ActivateComponent
  },
  {
    path:"resendActivationCode",
    component:ResendActivationCodeComponent
  },
  {
    path:"**",
    redirectTo:"login"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
