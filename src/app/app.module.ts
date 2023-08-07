import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormarrayComponent } from './formarray/formarray.component';
import { ArrayformComponent } from './arrayform/arrayform.component';
import { EventEmitterComponent } from './event-emitter/event-emitter.component';
import { NestedfarrayComponent } from './nestedfarray/nestedfarray.component';
import { ContactsComponent } from './users/contacts/contacts.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ChhoraComponent } from './parent/chhora/chhora.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormarrayComponent,
    ArrayformComponent,
    EventEmitterComponent,
    NestedfarrayComponent,
    ContactsComponent,
    ParentComponent,
    ChildComponent,
    ChhoraComponent,
    ReactiveformComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
