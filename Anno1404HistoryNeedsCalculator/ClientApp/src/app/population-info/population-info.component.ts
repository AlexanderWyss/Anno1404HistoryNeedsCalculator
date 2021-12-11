import {Component, Input, OnInit} from '@angular/core';
import {KeyValue} from "@angular/common";
import {Info, NeedsType, ResourcesType} from "../_models/Modes";
import {ProductionChainInput} from "../production-chain/production-chain.component";
import {AnnoService} from "../anno.service";

@Component({
  selector: 'app-population-info',
  templateUrl: './population-info.component.html',
  styleUrls: ['./population-info.component.scss']
})
export class PopulationInfoComponent implements OnInit {
  @Input()
  info?: Info;
  noOrder = (a: KeyValue<string, number>, b: KeyValue<string, number>): number => {
    return 0;
  };
  selectedProductionChain?: ProductionChainInput;

  constructor(private annoService: AnnoService) {
  }

  ngOnInit(): void {
    this.setDisplayProductionChain(this.annoService.getSelectedProductionChain(this.info?.name));
  }

  setDisplayProductionChain(resource?: string) {
    if (this.selectedProductionChain?.resource === resource) {
      this.selectedProductionChain = undefined;
    } else {
      this.selectedProductionChain = {
        resource: resource as ResourcesType,
        factor: this.info ? this.info.needs[resource as NeedsType]: 0
      };
    }
    this.annoService.setSelectedProductionChain(this.info?.name, this.selectedProductionChain?.resource);
  }
}
