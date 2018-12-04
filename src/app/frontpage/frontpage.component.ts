import { Component, OnInit } from "@angular/core"
import { HttpService } from "src/app/http.service"

export interface Postalcode {
  code: string
  codeFI: string
  codeSV: string
  areaFI: string
  areaSV: string
  type: number
}

@Component({
  selector: "app-frontpage",
  templateUrl: "./frontpage.component.html",
  styleUrls: ["./frontpage.component.scss"]
})
export class FrontpageComponent implements OnInit {
  zipCode: Postalcode
  code: string

  constructor(private rest: HttpService) {
    this.getAll()
  }

  ngOnInit() {}

  getAll() {
    this.rest.getAll().subscribe(
      data => {
        console.log(data)
      },
      err => {
        console.error(err)
      },
      () => {
        console.log("Loading JSON file ...")
      }
    )
  }

  getPostCode(code: string) {
    this.code = code
    // console.log(code)
    if (code !== null && code.length === 5) {
      this.rest.getPostCode(code).subscribe(
        data => {
          this.zipCode = data
          console.log(data)
        },
        err => {
          console.error(err)
        },
        () => {
          console.log("Loading JSON file ...")
        }
      )
    }
  }
}
