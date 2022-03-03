import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

@Component({
  selector: "app-fancybtn",
  templateUrl: "./fancybtn.component.html",
  styleUrls: ["./fancybtn.component.css"],
})
export class FancybtnComponent implements OnInit {
  constructor(private http: Http) {}

  ngOnInit() {
    this.http
      .get("https://jsonplaceholder.typicode.com/users")
      .map((response) => response.json())
      .subscribe((data) => console.log(data));
  }
  
}
