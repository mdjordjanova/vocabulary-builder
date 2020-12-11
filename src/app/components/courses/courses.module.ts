import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CoursesPage } from './courses.page';

@NgModule({
  declarations: [CoursesPage],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: CoursesPage
      }
    ])
  ]
})
export class CoursesPageModule { }