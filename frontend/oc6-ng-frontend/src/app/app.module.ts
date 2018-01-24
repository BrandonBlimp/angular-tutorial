import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PaddlersComponent } from './paddlers/paddlers.component';
import { PaddlerDetailComponent } from './paddler-detail/paddler-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    PaddlersComponent,
    PaddlerDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
