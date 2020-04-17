import { Component, OnInit } from '@angular/core';
import { PlanetsService } from 'src/app/services/planets.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Planet } from 'src/app/interfaces/planets';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.scss']
})
export class PlanetDetailsComponent implements OnInit {
  planetId: string;
  planetDetails: Planet;
  editMode: boolean;
  captain: string;
  planetStatuses = ['OK', '!OK', 'En route', 'TODO'];

  constructor(
    public planetsService: PlanetsService,
    public router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {
    this.editMode = false;
  }

  ngOnInit() {
    this.planetId = this.route.snapshot.paramMap.get('id');
    this.planetsService.getPlanetById(this.planetId).subscribe((data) => {
      this.planetDetails = data;
    });
    this.captain = this.authService.getToken();
  }

  public setStatusClass(status) {
    switch (status) {
      case 'OK':
        return 'status-ok';

      case '!OK':
        return 'status-not-ok';

      case 'TODO':
        return 'status-to-do';

      case 'En route':
        return 'status-en-route';

      default:
        return '';
    }
  }

  public checkPlanetVisited(status) {
    return status !== 'En route';
  }

  public getPlanetImage() {
    return this.planetDetails ? '../../../assets/images/' + this.planetDetails.image : '';
  }

  public editPlanet() {
    this.editMode = true;
  }

  public updatePlanet() {
    const planetUpdateDetails = {
      description: this.planetDetails.description,
      status: this.planetDetails.status,
      captain: this.captain
    };
    this.planetsService
      .updatePlanet(this.planetDetails.id, planetUpdateDetails)
      .subscribe((data) => {
        if (data) {
          this.editMode = false;
        }
      });
  }

  public goToPlanetsOverview() {
      this.router.navigate(['/planets']);
  }
}
