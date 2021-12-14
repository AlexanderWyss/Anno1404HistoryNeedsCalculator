import {Component, OnDestroy, OnInit} from '@angular/core';
import {AnnoService} from "../anno.service";
import {IslandInfo, SavedIsland} from "../_models/Modes";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  infos?: IslandInfo[];
  updateDate?: Date;
  interval?: number;
  newIslandName?: string;
  remainingSavedIslands?: SavedIsland[];

  constructor(private annoService: AnnoService) {
  }

  ngOnInit(): void {
    this.refresh();
    this.startAutoRefresh();
  }

  ngOnDestroy(): void {
    this.stopAutoRefresh();
  }

  private startAutoRefresh() {
    this.interval = setInterval(() => this.refresh(), 10000);
  }

  private stopAutoRefresh() {
    clearInterval(this.interval);
    this.interval = undefined;
  }

  refresh(): void {
    this.annoService.getInfo().subscribe(value => {
      const infos: IslandInfo[] = [];
      if (value.localId) {
        let currentIslandIndex = value.islands.findIndex(island => island.id === value.localId);
        if (currentIslandIndex != -1) {
          infos.push(value.islands[currentIslandIndex]);
          value.islands.splice(currentIslandIndex, 1);
        }
      }
      infos.push(...value.islands);
      this.infos = infos;
      this.remainingSavedIslands = value.remainingSavedIslands;
      this.updateDate = new Date();
    });
  }

  toggleAutoRefresh() {
    if (this.interval) {
      this.stopAutoRefresh();
    } else {
      this.startAutoRefresh();
    }
  }

  register() {
    this.annoService.register().subscribe(() => this.refresh());
  }

  createIsland() {
    if (this.newIslandName) {
      this.annoService.createIsland({name: this.newIslandName}).subscribe(() => this.refresh());
      this.newIslandName = "";
    }
  }
}
