import { Component } from '@angular/core';

@Component({
  selector: 'app-stats',
  imports: [],
  templateUrl: './stats.html',
  styleUrl: './stats.css',
})
export class Stats {
  stats: any[] = [
    {
      icon: 'pi pi-wifi',
      title: 'Безкоштовний WiFi'
    },
    {
      icon: 'pi pi-shop',
      title: 'Магазини поруч'
    },
    {
      icon: 'pi pi-warehouse',
      title: 'Парковка'
    },
    {
      icon: 'pi pi-objects-column',
      title: 'Всі меблі'
    }
  ];
}
