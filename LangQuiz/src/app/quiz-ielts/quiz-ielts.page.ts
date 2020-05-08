import { Component, OnInit } from "@angular/core";
import { QuizLogicService } from "../quiz-logic.service";
import { Question } from "../model/Question";

@Component({
  selector: "app-quiz-ielts",
  templateUrl: "./quiz-ielts.page.html",
  styleUrls: ["./quiz-ielts.page.scss"],
})
export class QuizIELTSPage implements OnInit {
  constructor(private quizLogic: QuizLogicService) {}
  questions: Question[];
  ngOnInit() {
    console.log(this.questions);
  }
}
