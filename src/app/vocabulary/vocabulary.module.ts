import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { VocabularyPage } from './vocabulary.page';

@NgModule({
  declarations: [VocabularyPage],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: VocabularyPage
      }
    ])
  ]
})
export class VocabularyPageModule { }