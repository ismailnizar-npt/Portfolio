import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RESUME } from '../../data/resume.data';
import { IMAGE } from '../../data/resume.data';

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss'
})
export class AboutComponent {
    resume = RESUME;
    image = IMAGE;
}

