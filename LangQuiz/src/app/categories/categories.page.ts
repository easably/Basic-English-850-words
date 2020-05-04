import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-categories",
  templateUrl: "./categories.page.html",
  styleUrls: ["./categories.page.scss"],
})
export class CategoriesPage {
  constructor(private route: Router) {}
  startQuiz() {
    this.route.navigateByUrl("/math-quiz/0");
  }
}
