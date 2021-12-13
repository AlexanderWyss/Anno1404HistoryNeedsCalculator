import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnChanges {
  @Input()
  resource?: string;
  layouts: string[] = [];

  private readonly layoutMap: Record<string, string[]> = {
    beer: ['beer'],
    books: ['five_fields_4', 'five_fields_2'],
    bread: ['bread'],
    candleSticks: [],
    carpets: [],
    coffee: [],
    dates: ['five_fields_4', 'five_fields_2'],
    fish: [],
    furCoats: [],
    garments: ['garments'],
    glasses: [],
    jerkins: ['pig'],
    marzipan: [],
    meat: ['cows'],
    milk: [],
    most: ['hemp_cider'],
    pearlNecklaces: [],
    perfume: [],
    robes: [],
    spices: ['spice'],
    wine: ['wine']
  };

  constructor() {
  }

  ngOnInit(): void {
    this.refresh();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.refresh();
  }

  private refresh() {
    if(this.resource) {
      this.layouts = this.layoutMap[this.resource].map(value => `assets/layouts/${value}.png`);
    } else {
      this.layouts = [];
    }
  }
}