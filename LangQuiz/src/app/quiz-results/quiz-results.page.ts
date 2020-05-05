import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-quiz-results",
  templateUrl: "./quiz-results.page.html",
  styleUrls: ["./quiz-results.page.scss"],
})
export class QuizResultsPage implements OnInit {
  correctAnswerCounter: number;
  constructor(private router: Router) {
    this.correctAnswerCounter = this.router.getCurrentNavigation().extras.state.correctAnswersCounter;
  }

  ngOnInit() {}
}
