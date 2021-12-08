import {Component, OnDestroy, OnInit} from '@angular/core';
import {AnnoService} from "../anno.service";
import {Info} from "../_models/Modes";
import {KeyValue} from "@angular/common";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  info?: Info;
  updateDate?: Date;
  interval?: number;
  noOrder = (a: KeyValue<string, number>, b: KeyValue<string, number>): number => {
    return 0;
  };

  constructor(private annoService: AnnoService) {
  }

  ngOnInit(): void {
    this.refresh();
    this.interval = setInterval(() => this.refresh(), 60000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  refresh(): void {
    this.annoService.getInfo().subscribe(value => {
      this.info = value;
      this.updateDate = new Date();
    });
  }

  iconPath(key: string): string {
    return 'assets/icon' + this.upperCase(key) + '.png'
  }

  private upperCase(value: string): string {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}
