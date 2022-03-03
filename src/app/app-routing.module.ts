import { Routes, Router, RouterModule } from "@angular/router";
import { ContractFormComponent } from "./contract-form/contract-form.component";
import { NewCmpComponent } from "./new-cmp/new-cmp.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { NgModule } from "@angular/core";

const routes : Routes = [
    {
      path: 'contract-form',
      component: ContractFormComponent
    },
    { 
      path: 'new-cmp',
      component: NewCmpComponent
    },
    { 
      path: ' **',
      pathMatch: 'full',
      component: NotFoundComponent
    },

  ]
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports : [RouterModule],
  })


  export class AppRoutingModule{};