import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root",
})
export class QuizLogicService {
  constructor(private http: HttpClient) {}
  chars: string = "hi";
  getData() {
    return this.http.get("../assets/data/Math_for_kids.txt", {
      responseType: "text",
    });

    console.log(this.chars);
    // return this.chars;
  }
}
