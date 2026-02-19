import {Component, signal} from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';

type GalleryImage = {
  itemImageSrc: string;
  thumbnailImageSrc: string;
  alt?: string;
  title?: string;
};

@Component({
  selector: 'app-galleria',
  imports: [GalleriaModule],
  templateUrl: './galleria.html',
  styleUrl: './galleria.css',
})
export class Galleria {
  activeIndex = 0;
  readonly images = signal<GalleryImage[]>([
    {
      itemImageSrc: '/assets/galleria/IMG_4532.webp',
      thumbnailImageSrc: '/assets/galleria/IMG_4532.webp',
      alt: 'Фото 1',
    },
    {
      itemImageSrc: '/assets/galleria/IMG_4533.webp',
      thumbnailImageSrc: '/assets/galleria/IMG_4533.webp',
      alt: 'Фото 2',
    },
    {
      itemImageSrc: '/assets/galleria/IMG_4534.webp',
      thumbnailImageSrc: '/assets/galleria/IMG_4534.webp',
      alt: 'Фото 3',
    },
    {
      itemImageSrc: '/assets/galleria/IMG_4535.webp',
      thumbnailImageSrc: '/assets/galleria/IMG_4535.webp',
      alt: 'Фото 4',
    },
    {
      itemImageSrc: '/assets/galleria/IMG_4536.webp',
      thumbnailImageSrc: '/assets/galleria/IMG_4536.webp',
      alt: 'Фото 5',
    },
    {
      itemImageSrc: '/assets/galleria/IMG_4538.webp',
      thumbnailImageSrc: '/assets/galleria/IMG_4538.webp',
      alt: 'Фото 6',
    },
    {
      itemImageSrc: '/assets/galleria/IMG_4539.webp',
      thumbnailImageSrc: '/assets/galleria/IMG_4539.webp',
      alt: 'Фото 7',
    },
    {
      itemImageSrc: '/assets/galleria/IMG_4542.webp',
      thumbnailImageSrc: '/assets/galleria/IMG_4542.webp',
      alt: 'Фото 8',
    },
    {
      itemImageSrc: '/assets/galleria/IMG_4546.webp',
      thumbnailImageSrc: '/assets/galleria/IMG_4546.webp',
      alt: 'Фото 9',
    },
  ]);

  readonly responsiveOptions = [
    { breakpoint: '1024px', numVisible: 5 },
    { breakpoint: '768px', numVisible: 3 },
    { breakpoint: '560px', numVisible: 1 },
  ];
}
