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
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { Component3Component } from './component3/component3.component';
import { SandbsComponent } from './sandbs/sandbs.component';
import { BehavioursubjectComponent } from './behavioursubject/behavioursubject.component';

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
    Component1Component,
    Component2Component,
    Component3Component,
    SandbsComponent,
    BehavioursubjectComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
