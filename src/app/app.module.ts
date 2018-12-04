import { BrowserModule } from "@angular/platform-browser"
import { NgModule } from "@angular/core"
import { NgbModule } from "@ng-bootstrap/ng-bootstrap"
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http"

import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { FrontpageComponent } from "./frontpage/frontpage.component"
import { OpenapiComponent } from "./openapi/openapi.component"

@NgModule({
  declarations: [AppComponent, FrontpageComponent, OpenapiComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    HttpClientModule
  ],
  exports: [OpenapiComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
