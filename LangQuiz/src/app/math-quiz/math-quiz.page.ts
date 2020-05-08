import { Component, OnInit, Output, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { QuizLogicService } from "../quiz-logic.service";
import { Question } from "../model/Question";
import { async } from "@angular/core/testing";
@Component({
  selector: "app-math-quiz",
  templateUrl: "./math-quiz.page.html",
  styleUrls: ["./math-quiz.page.scss"],
  providers: [QuizLogicService],
})
export class MathQuizPage implements OnInit {
  currentId: number = 0;
  color: string = "";
  correctAnswersCounter: number = 0;
  items;
  options: string[];
  regExp = new RegExp(/&\d=/g);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private quizLogic: QuizLogicService
  ) {
    this.route.paramMap.subscribe((params) => {
      this.setId(+params.get("id"));
    });
  }
  ngOnInit() {
    this.quizLogic.getData().subscribe((params) => {
      this.items = params.split(this.regExp).map((item) => item.split("@"));
      this.options = this.items[this.currentId][0].split(";");
      this.options.pop();
      console.log(this.options);
    });
  }

  isCorrectAnswer(target): void {
    target.color = "success";
    this.incrementCorrectAnswersCount();

    this.showNext();
  }
  isFalseAnswer(target): void {
    target.color = "danger";
  }
  navigateToNextQuestion() {
    this.router.navigate(["/math-quiz", this.getId() + 1]);

    if (this.currentId > this.items.length - 2) {
      this.showResults();
    }
  }

  checkAnswer(option, event): void {
    option === this.items[this.currentId][2]
      ? this.isCorrectAnswer(event)
      : this.isFalseAnswer(event);
  }
  showNext() {
    let next = document.querySelector(".next");
    next.classList.remove("next");
  }
  getId(): number {
    return this.currentId;
  }
  setId(id: number) {
    this.currentId = id;
  }
  showResults() {
    this.router.navigate(["/quiz-results"], {
      state: {
        correctAnswersCounter: this.correctAnswersCounter,
      },
    });
  }
  incrementCorrectAnswersCount(): number {
    if (this.correctAnswersCounter === this.items.length) {
      return this.correctAnswersCounter;
    } else {
      return this.correctAnswersCounter++;
    }
  }
}
