import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {KeyValue} from "@angular/common";
import {IslandInfo, NeedsType, ResourcesType, SavedIsland} from "../_models/Modes";
import {ProductionChainInput} from "../production-chain/production-chain.component";
import {AnnoService} from "../anno.service";

@Component({
  selector: 'app-population-info',
  templateUrl: './population-info.component.html',
  styleUrls: ['./population-info.component.scss']
})
export class PopulationInfoComponent implements OnInit {
  @Input()
  info?: IslandInfo;
  @Input()
  remainingSavedIsland?: SavedIsland[];
  noOrder = (a: KeyValue<string, number>, b: KeyValue<string, number>): number => {
    return 0;
  };
  selectedProductionChain?: ProductionChainInput;
  mappedIsland?: string;
  @Output()
  refreshRequired = new EventEmitter();

  constructor(private annoService: AnnoService) {
  }

  ngOnInit(): void {
    this.setDisplayProductionChain(this.annoService.getSelectedProductionChain(this.info?.id));
    if (this.info) {
      this.mappedIsland = this.info.savedIsland?.id;
    }
  }

  setDisplayProductionChain(resource?: string) {
    if (this.selectedProductionChain?.resource === resource) {
      this.selectedProductionChain = undefined;
    } else {
      this.selectedProductionChain = {
        resource: resource as ResourcesType,
        factor: this.info ? this.info.needs[resource as NeedsType] : 0
      };
    }
    this.annoService.setSelectedProductionChain(this.info?.id, this.selectedProductionChain?.resource);
  }

  getBuiltNeedsBuildings(key: string): number {
    return this.info?.savedIsland ? this.info.savedIsland[key as NeedsType] : NaN;
  }

  getNeedsClass(key: string, value: number): string {
    if (value === 0) {
      return '';
    }
    let builtNeedsBuildings = this.getBuiltNeedsBuildings(key);
    if (builtNeedsBuildings < value) {
      return 'error';
    } else if (builtNeedsBuildings < value + 0.25) {
      return 'warn';
    }
    return '';
  }

  change(key: string, diff: number) {
    if (this.info?.savedIsland) {
      this.info.savedIsland[key as NeedsType] += diff;
      this.annoService.updateBuildings(this.info.savedIsland).subscribe();
    }
  }

  mapIsland() {
    if (this.info) {
      this.annoService.mapIsland({
        islandId: this.info?.id,
        savedIslandId: this.mappedIsland
      }).subscribe(() => this.refreshRequired.emit());
    }
  }
}
