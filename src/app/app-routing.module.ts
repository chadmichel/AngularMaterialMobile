import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './category-list/category-list.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { MapComponent } from './map/map.component';

const routes: Routes = [
  { path: 'category', component: CategoryListComponent },
  { path: 'search', component: SearchComponent },
  { path: 'map', component: MapComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
