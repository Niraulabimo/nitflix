import { NgModule, Component } from '@angular/core';
import { ChildActivationStart, RouterModule, Routes } from '@angular/router';
import { FormarrayComponent } from './formarray/formarray.component';
import { ArrayformComponent } from './arrayform/arrayform.component';
import { EventEmitterComponent } from './event-emitter/event-emitter.component';
import { NestedfarrayComponent } from './nestedfarray/nestedfarray.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';

const routes: Routes = [
  { path: 'form', component: FormarrayComponent },
  { path: 'arrayform', component: ArrayformComponent },
  {
    path: 'event',
    component: EventEmitterComponent,
  },
  {
    path: 'nform',
    component: NestedfarrayComponent,
  },
  {
    path: 'parent',
    component: ParentComponent,
  },
  {
    path: 'child',
    component: ChildComponent,
  },
  {
    path: '',
    component: ReactiveformComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
