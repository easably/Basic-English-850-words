import { Component, OnInit } from "@angular/core";
import { Question } from "../model/Question";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-math-quiz",
  templateUrl: "./math-quiz.page.html",
  styleUrls: ["./math-quiz.page.scss"],
})
export class MathQuizPage {
  constructor(route: ActivatedRoute) {
    this.currentId = route.snapshot.params["id"];
  }
  currentId: number;
  questions: Question[] = [
    {
      id: 1,
      text: "2+2 is...",
      options: ["3", "2", "6", "4"],
      answer: "4",
      selectedOption: "",
    },
    {
      id: 2,
      text: "3+2 is...",
      options: ["1", "7", "5", "2"],
      answer: "5",
      selectedOption: "",
    },
    {
      id: 3,
      text: "2+10 is...",
      options: ["12", "2", "9", "4"],
      answer: "12",
      selectedOption: "",
    },
    {
      id: 4,
      text: "5+7 is...",
      options: ["14", "13", "8", "19"],
      answer: "13",
      selectedOption: "",
    },
  ];

  isCorrectAnswer() {}
  isFalseAnswer() {}
  checkAnswer() {}
  changeId(): number {
    return ++this.currentId;
  }
  displayNextQuestion() {}
}
