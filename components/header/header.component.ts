import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
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
}
