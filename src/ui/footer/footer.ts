import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  readonly menu = signal<{label: string, link: string}[]>([
    {label: 'Розташування', link: '#location'},
    {label: 'Характеристики', link: '#features'},
    {label: 'Переваги', link: '#advantages'},
    {label: 'Галерея', link: '#galleria'}
  ]);
}
