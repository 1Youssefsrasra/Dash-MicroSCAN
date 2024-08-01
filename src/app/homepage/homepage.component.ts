import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements AfterViewInit{
  constructor(private router: Router) {}

  ngAfterViewInit() {
    const burger = document.querySelectorAll<HTMLElement>('.navbar-burger');
    const menu = document.querySelectorAll<HTMLElement>('.navbar-menu');
    const close = document.querySelectorAll<HTMLElement>('.navbar-close');
    const backdrop = document.querySelectorAll<HTMLElement>('.navbar-backdrop');

    if (burger.length && menu.length) {
      burger.forEach(b => {
        b.addEventListener('click', () => {
          menu.forEach(m => {
            m.classList.toggle('hidden');
          });
        });
      });
    }

    if (close.length) {
      close.forEach(c => {
        c.addEventListener('click', () => {
          menu.forEach(m => {
            m.classList.toggle('hidden');
          });
        });
      });
    }

    if (backdrop.length) {
      backdrop.forEach(b => {
        b.addEventListener('click', () => {
          menu.forEach(m => {
            m.classList.toggle('hidden');
          });
        });
      });
    }
  }


  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
