import { AfterViewInit, Component, ElementRef, OnInit } from "@angular/core"
import SwaggerUI from "swagger-ui"

@Component({
  selector: "app-openapi",
  templateUrl: "./openapi.component.html",
  styleUrls: ["./openapi.component.scss"]
})
export class OpenapiComponent implements AfterViewInit, OnInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const ui = SwaggerUI({
      url: "https://www.postinumerot.com/postalcodes.json",
      domNode: this.el.nativeElement.querySelector(".OA-container"),
      deepLinking: true,
      presets: [SwaggerUI.presets.apis]
    })
  }

  ngOnInit() {}
}
