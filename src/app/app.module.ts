import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { HeaderComponent } from './header/header.component';
import { SizerComponent } from './sizer/sizer.component'; // we didnt write this line 

@NgModule({
  declarations: [ // all the components created 
    AppComponent,
    NewCmpComponent,
    HeaderComponent,
    SizerComponent  // also it was automatically added  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
