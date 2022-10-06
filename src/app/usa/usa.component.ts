import { Component, OnInit, Inject } from '@angular/core';
import { PopulationService } from "../population.service";

@Component({
  selector: 'app-usa',
  templateUrl: './usa.component.html',
  styleUrls: ['./usa.component.css']
})
export class UsaComponent implements OnInit {

  population: number = 54321;

  constructor(@Inject(PopulationService) private ps: PopulationService) {
    this.population = this.ps.IndiaPopulation;
  }

  ngOnInit(): void {
  }

}
