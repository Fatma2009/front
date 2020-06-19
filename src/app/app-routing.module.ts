import { AssistantComponent } from './assistant/assistant.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {APP_BASE_HREF} from '@angular/common';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path : '',
    component : HomeComponent

  }, {
    path:'login',
    component: LoginComponent
},

  {
    path : 'assistant',
    component : AssistantComponent,

  },{path : 'home',
  component : HomeComponent

}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}]

})
export class AppRoutingModule { }
