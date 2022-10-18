import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FoodComponent } from './food/food.component';
import { HomeComponent } from './home/home.component';
import { OtherComponent } from './other/other.component';
import { TicketComponent } from './ticket/ticket.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"other",component:OtherComponent},
  {path:"food",component:FoodComponent},
  {path:"ticket",component:TicketComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
