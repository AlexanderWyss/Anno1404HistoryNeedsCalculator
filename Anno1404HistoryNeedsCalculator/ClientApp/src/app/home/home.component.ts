import {Component, OnDestroy, OnInit} from '@angular/core';
import {AnnoService} from "../anno.service";
import {Info} from "../_models/Modes";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  infos?: Info[];
  updateDate?: Date;
  interval?: number;

  constructor(private annoService: AnnoService) {
  }

  ngOnInit(): void {
    this.refresh();
    this.interval = setInterval(() => this.refresh(), 10000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  refresh(): void {
    this.annoService.getInfo().subscribe(value => {
      this.infos = value;
      this.updateDate = new Date();
    });
  }
}
