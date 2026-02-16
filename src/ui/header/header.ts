import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass';

@Component({
  selector: 'app-header',
    imports: [CommonModule, StyleClassModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

}
