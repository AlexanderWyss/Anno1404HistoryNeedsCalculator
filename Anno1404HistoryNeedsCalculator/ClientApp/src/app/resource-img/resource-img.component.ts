import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-resource-img',
  templateUrl: './resource-img.component.html',
  styleUrls: ['./resource-img.component.scss']
})
export class ResourceImgComponent implements OnInit {
  @Input()
  resource?: string;
  @Input()
  value?: number;
  @Input()
  decimal?: boolean;

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
