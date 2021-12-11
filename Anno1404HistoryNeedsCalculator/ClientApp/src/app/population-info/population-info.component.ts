import {Component, Input, OnInit} from '@angular/core';
import {KeyValue} from "@angular/common";
import {Info} from "../_models/Modes";

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

  constructor() {
  }

  ngOnInit(): void {
  }

  iconPath(key: string): string {
    return 'assets/icon' + this.upperCase(key) + '.png'
  }

  private upperCase(value: string): string {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}
