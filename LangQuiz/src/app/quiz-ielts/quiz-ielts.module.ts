import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuizIELTSPageRoutingModule } from './quiz-ielts-routing.module';

import { QuizIELTSPage } from './quiz-ielts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuizIELTSPageRoutingModule
  ],
  declarations: [QuizIELTSPage]
})
export class QuizIELTSPageModule {}
