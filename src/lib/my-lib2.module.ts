import { NgModule } from '@angular/core';
import { MyLib2Component } from './my-lib2.component';
import { UsersComponent } from './users/users.component';
import { AlamsComponent } from './alams/alams.component';



@NgModule({
  declarations: [MyLib2Component, UsersComponent, AlamsComponent],
  imports: [
  ],
  exports: [MyLib2Component]
})
export class MyLib2Module { }
