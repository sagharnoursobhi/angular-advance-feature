import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  getNames() {
    return ["name1", "name2", "name3"];
  }
}
