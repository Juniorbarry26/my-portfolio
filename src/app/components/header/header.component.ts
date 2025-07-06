import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  navLinks = [
    { path: '#home', label: 'Home' },
    { path: '#about', label: 'About' },
    { path: '#projects', label: 'Projects' },
    { path: '#services', label: 'Services' },
    { path: '#testimonials', label: 'Testimonials' },
    { path: '#contact', label: 'Contact' }
  ];

  currentSection = '';

  scrollToSection(sectionId: string) {
    const el = document.querySelector(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      this.currentSection = sectionId;
    }
  }

}
