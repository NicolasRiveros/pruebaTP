import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';

declare let h337: any;

const MOUSE_CIRCLE_RADIUS = 25;
const MOUSE_CIRCLE_TRANSL_RADIUS = 10;
const HEATMAP_HEIGHT = 400;
const HEATMAP_WIDTH = 1000;

@Component({
  selector: 'app-container',
  template: `
  <nb-layout windowMode>
  <nb-layout-header fixed>
  <app-header></app-header>
  </nb-layout-header>
  <nb-layout-column>
  <router-outlet></router-outlet>
</nb-layout-column>
</nb-layout>  `,
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit, AfterViewInit {


  menu: any = [];
  ngOnInit() {

    // document.addEventListener('wheel', (e) => {

    // console.log(e, 'scrollll');
    // });

    this.menu = [
      {
        title: 'home',
        link: '/container/main',
        icon: 'home-outline'
      }, {
        title: 'Jump',
        link: '/container/jump',
        icon: 'file-text-outline'
      }, {
        title: 'MarketPlace',
        link: '/container/marketPlace',
        icon: 'shopping-cart-outline'
      }, {
        title: 'MarketPlace Admin',
        link: '/container/marketPlaceConfig',
        icon: 'settings-2-outline'
      }
    ];
  }

  ngAfterViewInit() {
    // setTimeout(() => {
    //   this.heatMap();
    // }, 2000);

  }








}

