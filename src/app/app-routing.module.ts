import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservableComponent } from './observable/observable.component';
import { FromEventComponent } from './from-event/from-event.component';
import { IntervalOperatorComponent } from './interval-operator/interval-operator.component';
import { OfOperatorComponent } from './of-operator/of-operator.component';

const routes: Routes = [
  {path:'' , component: ObservableComponent , children: [
    {path: 'fromevent', component: FromEventComponent},
    {path: 'interval', component: IntervalOperatorComponent},
    {path: 'Of', component: OfOperatorComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
