import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RESUME } from '../../data/resume.data';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss'
})
export class ContactComponent {
    resume = RESUME;

    email = this.resume.personal.email;
}
