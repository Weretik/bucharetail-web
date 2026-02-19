import { Component, signal } from '@angular/core';
import {Hero} from '../ui/hero/hero';
import {Header} from '../ui/header/header';
import {Footer} from '../ui/footer/footer';
import {Features} from '../ui/features/features';
import {Area} from '../ui/area/area';
import {Advantages} from '../ui/advantages/advantages';
import {Galleria} from '../ui/galleria/galleria';
import {CallToActions} from '../ui/call-to-actions/call-to-actions';


@Component({
  selector: 'app-root',
  imports: [Hero, Header, Footer, Features, Area, Advantages, Galleria, CallToActions],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('bucharetail');
}
