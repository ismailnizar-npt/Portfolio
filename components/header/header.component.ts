import { Component, HostListener, Inject, PLATFORM_ID, inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RESUME } from '../../data/resume.data';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {
    resume = RESUME;
    activeSection: string = '';

    private platformId = inject(PLATFORM_ID);
    isBrowser = isPlatformBrowser(this.platformId);

    constructor() { }

    @HostListener('window:scroll', [])
    onWindowScroll() {
        if (!this.isBrowser) return;

        const sections = ['about', 'experience', 'skills', 'projects', 'contact'];

        for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
                const rect = element.getBoundingClientRect();
                // If section is in the upper part of the screen
                if (rect.top <= 150 && rect.bottom >= 150) {
                    this.activeSection = section;
                    break;
                }
            }
        }
    }

    scrollToSection(sectionId: string, event: Event) {
        event.preventDefault();
        if (!this.isBrowser) return;

        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            this.activeSection = sectionId;
        }
    }
}
