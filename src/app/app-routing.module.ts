import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotelesComponent } from './components/hoteles/hoteles.component';

const routes: Routes = [
  { path: 'hotel', component: HotelesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
