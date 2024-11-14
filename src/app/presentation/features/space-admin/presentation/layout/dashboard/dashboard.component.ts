import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {



  ngOnInit(): void {
    const sidebarItems = document.querySelectorAll('.sidebar .item');
    const tableRows = document.querySelectorAll('.main table tbody tr');

    const menuBtn = document.getElementById('menu-btn');
    const leftSection = document.querySelector('.left-section') as HTMLElement;

    let isMenuOpen = false;

    sidebarItems.forEach((sideItem) => {
      sideItem.addEventListener('click', () => {
        sidebarItems.forEach((item) => {
          item.classList.remove('active');
        });
        sideItem.classList.add('active');
      });
    });

    tableRows.forEach((tableTr) => {
      tableTr.addEventListener('click', () => {
        tableRows.forEach((item) => {
          item.classList.remove('selected');
        });
        tableTr.classList.add('selected');
      });
    });


menuBtn?.addEventListener('click', () => {
  if (!isMenuOpen) {
    leftSection.style.left = '0';
  } else {
    leftSection.style.left = '-160px';
  }
  isMenuOpen = !isMenuOpen;
});



  }
}



