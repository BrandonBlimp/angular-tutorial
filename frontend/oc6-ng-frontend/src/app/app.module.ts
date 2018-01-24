import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PaddlerDetailComponent } from './paddler-detail/paddler-detail.component';
import { PaddlerService } from './paddler.service';
import { PaddlersComponent } from './paddlers/paddlers.component';


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
  providers: [ PaddlerService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
