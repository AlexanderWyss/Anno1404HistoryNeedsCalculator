import {Component, OnInit} from '@angular/core';
import {ResourcesType} from "../_models/Modes";
import {ProductionChainService} from "../production-chain.service";

@Component({
  selector: 'app-production-chains-overview',
  templateUrl: './production-chains-overview.component.html',
  styleUrls: ['./production-chains-overview.component.css']
})
export class ProductionChainsOverviewComponent implements OnInit {
  resources: ResourcesType[];

  constructor(private productionChainService: ProductionChainService) {
    this.resources = productionChainService.getResourcesWithRequirements();
  }

  ngOnInit(): void {

  }

}
