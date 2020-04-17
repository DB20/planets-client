import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanetsOverviewComponent } from './components/planets-overview/planets-overview.component';
import { PlanetDetailsComponent } from './components/planet-details/planet-details.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './components/guards/auth.guard';
import { PlanetsGuard } from './components/guards/planets.guard';

const routes: Routes = [
  { path: '', redirectTo: 'planets', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  {
    path: 'planets',
    component: PlanetsOverviewComponent,
    canActivate: [PlanetsGuard]
  },
  {
    path: 'planet/:id',
    component: PlanetDetailsComponent,
    canActivate: [PlanetsGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
