import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NpcComponent } from './npc/npc.component';
import { BacklogComponent } from './backlog/backlog.component';
import { NpcDetailComponent } from './npc-detail/npc-detail.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    BacklogComponent,
    AppComponent,
    NpcComponent,
    NpcDetailComponent
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
