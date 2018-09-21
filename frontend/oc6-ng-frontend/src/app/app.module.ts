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
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';


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
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // TODO: Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [ PaddlerService, MessageService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
