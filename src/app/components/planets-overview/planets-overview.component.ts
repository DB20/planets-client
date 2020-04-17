import { Component, OnInit } from '@angular/core';
import { Planet } from 'src/app/interfaces/planets';
import { PlanetsService } from 'src/app/services/planets.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-planets-overview',
  templateUrl: './planets-overview.component.html',
  styleUrls: ['./planets-overview.component.scss']
})
export class PlanetsOverviewComponent implements OnInit {
  planets: Planet[];
  constructor(
    public planetsService: PlanetsService,
    public router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.planetsService.getPlanets().subscribe((data) => {
      this.planets = data;
    });
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

  public goToPlanetDetails(element) {
    this.router.navigate(['../planet', element.id], {
      relativeTo: this.route
    });
  }
}
