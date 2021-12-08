import {Component, OnInit} from '@angular/core';
import {AnnoService} from "../anno.service";
import {Info} from "../_models/Modes";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  info: Info | undefined;
  constructor(private annoService: AnnoService) {
  }

  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void {
    this.annoService.getInfo().subscribe(value => this.info = value);
  }
}
