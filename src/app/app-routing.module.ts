import { Routes, Router, RouterModule } from "@angular/router";
import { ContractFormComponent } from "./contract-form/contract-form.component";
import { NewCmpComponent } from "./new-cmp/new-cmp.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { Component, NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { ProductComponent } from "./product/product.component";

const routes: Routes = [
 
  {
    path: "contract-form",
    component: ContractFormComponent,
  },
  {
    path: "new-cmp",
    component: NewCmpComponent,
  },
  {
      path:'employees/:id',
      component: EmployeeListComponent
    
  },
  {
      path:'product',
      component:ProductComponent
  },
  {
    path: " **",
    pathMatch: "full",
    component: NotFoundComponent,
  },
  

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
