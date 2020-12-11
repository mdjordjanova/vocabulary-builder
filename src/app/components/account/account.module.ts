import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AccountPage } from './account.page';

@NgModule({
  declarations: [AccountPage],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: AccountPage
      }
    ])
  ]
})
export class AccountPageModule { }