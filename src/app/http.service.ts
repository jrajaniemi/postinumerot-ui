import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs/Observable"

@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<any> {
    return this.httpClient.get("https://api.postinumerot.com/v1/")
  }

  getPostCode(zip: string): Observable<any> {
    return this.httpClient.get(`https://api.postinumerot.com/v1/${zip}`)
  }
}
