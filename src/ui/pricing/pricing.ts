import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

type PlanFeature = {
  name: string;
  icon: string;
};

type Plan = {
  name: string;
  price: number;
  icon: string;
  description: PlanFeature[];
};

@Component({
  selector: 'app-pricing',
  imports: [CommonModule, ButtonModule],
  templateUrl: './pricing.html',
  styleUrl: './pricing.css',
})
export class Pricing {
  plans: Plan[] = [
    {
      name: 'Sketchers',
      price: 10.99,
      icon: 'pi pi-pencil',
      description: [
        { name: 'Arcu vitae elementum', icon: 'pi pi-check-circle' },
        { name: 'Dui faucibus in ornare', icon: 'pi pi-check-circle' },
        { name: 'Morbi tincidunt augue', icon: 'pi pi-check-circle' },
        { name: 'Sed euismod nisi', icon: 'pi pi-check-circle' }
      ]
    },
    {
      name: 'Painter',
      price: 15.99,
      icon: 'pi pi-palette',
      description: [
        {
          name: 'includes all the features of sketchers',
          icon: 'pi pi-reply'
        },
        { name: 'Sed eget facilisis turpis', icon: 'pi pi-check-circle' },
        {
          name: 'Duis tincidunt ullamcorper libero',
          icon: 'pi pi-check-circle'
        },
        { name: 'Proin purus orci', icon: 'pi pi-check-circle' }
      ]
    },
    {
      name: 'Artist',
      price: 24.99,
      icon: 'pi pi-image',
      description: [
        {
          name: 'includes all the features of painter',
          icon: 'pi pi-reply'
        },
        { name: 'Maecenas luctus nisl', icon: 'pi pi-check-circle' },
        { name: 'Aliquam erat volutpat', icon: 'pi pi-check-circle' },
        { name: 'Phasellus ante nulla', icon: 'pi pi-check-circle' }
      ]
    }
  ];
  currency: string = '$';
  selectedPlan: Plan = this.plans[1];
  selectedInterval: 'month' | 'year' = 'month';
}
