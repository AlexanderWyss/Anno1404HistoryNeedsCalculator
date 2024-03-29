import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ProductionChainDto, ResourcesType} from "../_models/Modes";
import {ProductionChainService} from "../production-chain.service";

export interface ProductionChainInput {
  resource: ResourcesType;
  factor: number;
}

@Component({
  selector: 'app-production-chain',
  templateUrl: './production-chain.component.html',
  styleUrls: ['./production-chain.component.scss']
})
export class ProductionChainComponent implements OnInit, OnChanges {
  @Input()
  input?: ProductionChainInput;
  @Input()
  productionChain?: ProductionChainDto;

  constructor(private productionChainService: ProductionChainService) {
  }

  ngOnInit(): void {
    this.loadChain();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.loadChain();
  }

  private loadChain() {
    if (this.input) {
      this.productionChain = this.productionChainService.getProductionChain(this.input.resource, Math.ceil(this.input.factor));
    }
  }

  getAdditionalValues(productionChain: ProductionChainDto) {
    const addValues = [];
    if (productionChain.factor !== productionChain.singleFactor) {
      addValues.push(productionChain.singleFactor);
    }
    if (productionChain.factor !== productionChain.niceFactor) {
      addValues.push(productionChain.niceFactor);
    }
    return addValues;
  }
}
