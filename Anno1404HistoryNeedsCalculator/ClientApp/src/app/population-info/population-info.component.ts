import {Component, Input, OnInit} from '@angular/core';
import {KeyValue} from "@angular/common";
import {Info, ResourcesType} from "../_models/Modes";
import {ProductionChainInput} from "../production-chain/production-chain.component";

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

  constructor() {
  }

  ngOnInit(): void {
  }

  setDisplayProductionChain(resource: string, factor: number) {
    if (this.selectedProductionChain?.resource === resource && this.selectedProductionChain.factor === factor) {
      this.selectedProductionChain = undefined;
    } else {
      this.selectedProductionChain = {
        resource: resource as ResourcesType,
        factor: factor
      };
    }
  }
}
