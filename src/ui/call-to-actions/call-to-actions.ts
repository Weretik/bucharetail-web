import { Component } from '@angular/core';
import {ButtonDirective, ButtonLabel} from 'primeng/button';

@Component({
  selector: 'app-call-to-actions',
  imports: [
    ButtonDirective,
    ButtonLabel
  ],
  templateUrl: './call-to-actions.html',
  styleUrl: './call-to-actions.css',
})
export class CallToActions {

}
