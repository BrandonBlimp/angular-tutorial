import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PaddlerDetailComponent } from './paddler-detail/paddler-detail.component';
import { PaddlerService } from './paddler.service';
import { PaddlersComponent } from './paddlers/paddlers.component';
import { BoatsComponent } from './boats/boats.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    PaddlersComponent,
    PaddlerDetailComponent,
    BoatsComponent,
    MessagesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ PaddlerService, MessageService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
