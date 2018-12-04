import { NgModule } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"
import { FrontpageComponent } from "./frontpage/frontpage.component"
import { OpenapiComponent } from "./openapi/openapi.component"

const routes: Routes = [
  {
    path: "",
    component: FrontpageComponent
  },
  {
    path: "api",
    component: OpenapiComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
