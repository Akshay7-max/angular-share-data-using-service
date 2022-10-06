import { Component, OnInit, Inject } from '@angular/core';
import { PopulationService } from "../population.service";

@Component({
  selector: 'app-india',
  templateUrl: './india.component.html',
  styleUrls: ['./india.component.css']
})
export class IndiaComponent implements OnInit {

  population: number = 123456;

  constructor(@Inject(PopulationService) private ps: PopulationService) {
    this.ps.IndiaPopulation = this.population;
    // this.population = this.ps.IndiaPopulation;
  }

  ngOnInit(): void {
  }

}
