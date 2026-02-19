import { Component } from '@angular/core';
import {ButtonDirective, ButtonLabel} from 'primeng/button';

@Component({
  selector: 'app-advantages',
  imports: [
    ButtonDirective,
    ButtonLabel
  ],
  templateUrl: './advantages.html',
  styleUrl: './advantages.css',
})
export class Advantages {

}
