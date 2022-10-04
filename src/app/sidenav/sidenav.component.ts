import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';
import { navData } from './nav-data';
import { keyframes, animate, style, transition, trigger } from "@angular/animations";
import { fadeInOut, InavbarData } from './helper';
interface sideNaveToggle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [
    fadeInOut,
    trigger('rotate', [
      transition(':enter', [
        animate('1000ms',
          keyframes([
            style({ transform: 'rotate(0deg)', offset: '0' }),
            style({ transform: 'rotate(2turn)', offset: '1' })
          ])
        )
      ])
    ])
  ]
})
export class SidenavComponent implements OnInit {

  constructor() { }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 768) {
      this.collapsed = false;
      this.onToggleSidenav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth })
    }
  }
  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }
  @Output() onToggleSidenav: EventEmitter<sideNaveToggle> = new EventEmitter();
  collapsed = false;
  screenWidth = 0;
  navData = navData;
  multiple: boolean = false;
  toggleColapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSidenav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth })
  }
  colseSidenav(): void {
    this.collapsed = false;
    this.onToggleSidenav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth })
  }
  handleClick(item: InavbarData): void {
    if (!this.multiple) {
      for (let modelItem of this.navData) {
        if (item !== modelItem && modelItem.expanded) {
          modelItem.expanded = false;
        }
      }
    }
    item.expanded = !item.expanded;
  }
}
