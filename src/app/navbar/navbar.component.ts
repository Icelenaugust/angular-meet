import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  expanded = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(menu: HTMLElement, expanded: boolean) {
    const menuList = Array.prototype.slice.call(menu.children) as HTMLElement[];
    if (!expanded) {
      gsap.to(menu, {
        duration: 0.6,
      });
      console.log(menuList.length);
      this.showElements(menuList, menu);
    } else {
      this.hideElements(menuList, menu);
    }

  }

  private showElements(menuList: HTMLElement[], menu: HTMLElement): void {
    this.expanded = true;
    for (let i = 0; i < menuList.length; i++) {
      const sliced = menuList.slice(i, menuList.length);
      const angle = 180/(menuList.length - 1);
      gsap.to(sliced, {
        translateX: -70 * Math.cos(i * (angle/180 * Math.PI)),
        translateY: -70 * Math.sin(i * (angle/180 * Math.PI)),
        delay: 0.3 * i,
        duration: 0.6
      });
    }

  }

  private hideElements(menuList: HTMLElement[], menu: HTMLElement): void {
    this.expanded = false;
    gsap.to(menuList, {
      x: 0,
      y: 0,
      duration: 0.3
    })
  }

}
