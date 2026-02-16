import { Component, signal } from '@angular/core';
import {Hero} from '../ui/hero/hero';
import {Header} from '../ui/header/header';
import {Footer} from '../ui/footer/footer';
import {Stats} from '../ui/stats/stats';
import {Faq} from '../ui/faq/faq';
import {Features} from '../ui/features/features';
import {MainContent} from '../ui/main-content/main-content';
import {Pricing} from '../ui/pricing/pricing';

@Component({
  selector: 'app-root',
  imports: [Hero, Header, Footer, Stats, Faq, Features, MainContent, Pricing],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('bucharetail');
}
