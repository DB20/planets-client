import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanetsOverviewComponent } from './components/planets-overview/planets-overview.component';
import { PlanetDetailsComponent } from './components/planet-details/planet-details.component';
import { LoginComponent } from './components/login/login.component';
import { CookieService } from 'ngx-cookie-service';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetsOverviewComponent,
    PlanetDetailsComponent,
    LoginComponent,
    HeaderComponent
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {}
