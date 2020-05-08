import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "categories",
    loadChildren: () =>
      import("./categories/categories.module").then(
        (m) => m.CategoriesPageModule
      ),
  },
  {
    path: "math-quiz/:id",
    loadChildren: () =>
      import("./math-quiz/math-quiz.module").then((m) => m.MathQuizPageModule),
  },
  {
    path: "quiz-results",
    loadChildren: () =>
      import("./quiz-results/quiz-results.module").then(
        (m) => m.QuizResultsPageModule
      ),
  },
  {
    path: "quiz-ielts/:id",
    loadChildren: () =>
      import("./quiz-ielts/quiz-ielts.module").then(
        (m) => m.QuizIELTSPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
