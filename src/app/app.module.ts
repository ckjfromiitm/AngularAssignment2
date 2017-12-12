import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import {FormsModule} from '@angular/forms';
import { ChildComponentComponent } from './tasks-list/child-component/child-component.component';
import { UpperCaseConverterPipe } from './upper-case-converter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TasksListComponent,
    ChildComponentComponent,
    UpperCaseConverterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
