import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizIELTSPage } from './quiz-ielts.page';

const routes: Routes = [
  {
    path: '',
    component: QuizIELTSPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizIELTSPageRoutingModule {}
