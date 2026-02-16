import { Component } from '@angular/core';
import {ButtonDirective} from 'primeng/button';

@Component({
  selector: 'app-main-content',
  imports: [
    ButtonDirective
  ],
  templateUrl: './main-content.html',
  styleUrl: './main-content.css',
})
export class MainContent {

}
