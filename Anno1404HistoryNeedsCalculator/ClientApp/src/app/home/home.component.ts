import {Component, OnInit} from '@angular/core';
import {AnnoService} from "../anno.service";
import {Info} from "../_models/Modes";
import {KeyValue} from "@angular/common";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  info: Info | undefined;
  noOrder = (a: KeyValue<string, number>, b: KeyValue<string, number>): number => {
    return 0;
  };

  constructor(private annoService: AnnoService) {
  }

  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void {
    this.annoService.getInfo().subscribe(value => this.info = value);
  }

  iconPath(key: string): string {
    return 'assets/icon' + this.upperCase(key) + '.png'
  }

  private upperCase(value: string): string {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}
