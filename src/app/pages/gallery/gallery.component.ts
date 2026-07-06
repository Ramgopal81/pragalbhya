import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface GalleryItem {
  title: string;
  category: string;
  image: string;
  badge: string;
  layout: 'normal' | 'wide' | 'tall';
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  readonly filterOptions = [
    { label: 'All', value: 'all' },
    { label: 'Sports', value: 'sports' },
    { label: 'Science Lab', value: 'science-lab' },
    { label: 'Computer Lab', value: 'computer-lab' },
    { label: 'Classrooms', value: 'classrooms' },
    { label: 'Library', value: 'library' },
    { label: 'Events', value: 'events' }
  ];

  readonly galleryItems: GalleryItem[] = [
    // Sports Images
    ...Array.from({ length: 8 }, (_, i) => ({
      title: `Sports Activity ${i + 1}`,
      category: 'sports',
      image: `assets/images/gallery/sports/sport-${i + 1}.jpg`,
      badge: 'Sports',
      layout: (i % 3 === 0 ? 'wide' : i % 3 === 1 ? 'tall' : 'normal') as 'normal' | 'wide' | 'tall'
    })),
    // Science Lab Images
    ...Array.from({ length: 13 }, (_, i) => ({
      title: `Science Lab Experiment ${i + 1}`,
      category: 'science-lab',
      image: `assets/images/gallery/science-lab/science-${i + 1}.jpg`,
      badge: 'Science Lab',
      layout: (i % 3 === 0 ? 'wide' : i % 3 === 1 ? 'tall' : 'normal') as 'normal' | 'wide' | 'tall'
    })),
    // Computer Lab Images
    ...Array.from({ length: 3 }, (_, i) => ({
      title: `Computer Lab Session ${i + 1}`,
      category: 'computer-lab',
      image: `assets/images/gallery/computer-lab/computer-${i + 1}.jpg`,
      badge: 'Computer Lab',
      layout: 'normal' as const
    })),
    // Classroom Images
    ...Array.from({ length: 1 }, (_, i) => ({
      title: `Classroom Learning ${i + 1}`,
      category: 'classrooms',
      image: `assets/images/gallery/classrooms/classroom-${i + 1}.jpg`,
      badge: 'Classrooms',
      layout: 'wide' as const
    })),
    // Library Images
    ...Array.from({ length: 3 }, (_, i) => ({
      title: `Library Study Session ${i + 1}`,
      category: 'library',
      image: `assets/images/gallery/library/library-${i + 1}.jpg`,
      badge: 'Library',
      layout: 'normal' as const
    })),
    // Events Images
    ...Array.from({ length: 3 }, (_, i) => ({
      title: `School Event ${i + 1}`,
      category: 'events',
      image: `assets/images/gallery/events/event-${i + 1}.jpg`,
      badge: 'Events',
      layout: (i === 0 ? 'wide' : 'normal') as 'normal' | 'wide' | 'tall'
    }))
  ];

  activeCategory: string = 'all';
  selectedItem: GalleryItem | null = null;
  currentSlideIndex: number = 0;
  gridPage: number = 0;
  readonly itemsPerPage: number = 12;

  get filteredItems(): GalleryItem[] {
    const category = this.activeCategory === 'all'
      ? this.galleryItems.slice(6)
      : this.galleryItems.filter((item) => item.category === this.activeCategory);

    const start = this.gridPage * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return category.slice(start, end);
  }

  get totalPages(): number {
    const category = this.activeCategory === 'all'
      ? this.galleryItems.slice(6)
      : this.galleryItems.filter((item) => item.category === this.activeCategory);
    return Math.ceil(category.length / this.itemsPerPage);
  }

  get sliderItems(): GalleryItem[] {
    return this.galleryItems.slice(0, 6);
  }

  setCategory(category: string): void {
    this.activeCategory = category;
    this.gridPage = 0;
  }

  nextGridPage(): void {
    if (this.gridPage < this.totalPages - 1) {
      this.gridPage++;
    }
  }

  prevGridPage(): void {
    if (this.gridPage > 0) {
      this.gridPage--;
    }
  }

  goToGridPage(page: number): void {
    this.gridPage = page;
  }

  openLightbox(item: GalleryItem): void {
    this.selectedItem = item;
  }

  closeLightbox(): void {
    this.selectedItem = null;
  }

  nextSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.sliderItems.length;
  }

  prevSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.sliderItems.length) % this.sliderItems.length;
  }

  goToSlide(index: number): void {
    this.currentSlideIndex = index;
  }
}
