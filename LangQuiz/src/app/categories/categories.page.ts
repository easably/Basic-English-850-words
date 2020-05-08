import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { QuizLogicService } from "../quiz-logic.service";

@Component({
  selector: "app-categories",
  templateUrl: "./categories.page.html",
  styleUrls: ["./categories.page.scss"],
})
export class CategoriesPage implements OnInit {
  constructor(private route: Router, private quizLogic: QuizLogicService) {}
  ngOnInit() {}
  startQuiz() {
    this.route.navigateByUrl("/math-quiz/1");
  }
  startIeltsQuiz() {
    this.route.navigateByUrl("quiz-ielts/0");
  }
}
