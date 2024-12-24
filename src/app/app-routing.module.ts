// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './fruits/home/home.component';  // Ensure this import is correct

const routes: Routes = [
  { path: "fruits/home", component: HomeComponent },
  { path: "fruits", redirectTo: "fruits/home", pathMatch: "full" },
  { path: "", redirectTo: "fruits/home", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
