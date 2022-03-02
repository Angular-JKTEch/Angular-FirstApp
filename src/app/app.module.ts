import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // imported 
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { HeaderComponent } from './header/header.component';
import { SizerComponent } from './sizer/sizer.component';
import { LearnStyleComponent } from './learn-style/learn-style.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ttClassDirective } from './tt-class.directive';
import { SqrtPipe } from './app.sqrt';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { MyserviceService } from './myservice.service';
import { EmployeeService } from './employee.service';

@NgModule({
  declarations: [ // all the components created 
    AppComponent,
    NewCmpComponent,
    HeaderComponent,
    SizerComponent,
    LearnStyleComponent,
    NavbarComponent,
    ttClassDirective,
    SqrtPipe,
    EmployeeListComponent,
    EmployeeDetailsComponent  // also it was automatically added  
  ],
  imports: [
    BrowserModule,
    FormsModule, // you have this imported 
    HttpModule
  ],
  providers: [MyserviceService, EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
