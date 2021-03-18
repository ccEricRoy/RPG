import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BacklogComponent } from './backlog/backlog.component';
import { AppComponent } from './app.component';
import { NpcComponent } from './npc/npc.component';
import { NpcDetailComponent } from './npc-detail/npc-detail.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    BacklogComponent,
    AppComponent,
    NpcComponent,
    NpcDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
