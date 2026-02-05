import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../components/hero/hero.component';
import { EducationComponent } from '../../components/education/education.component';
import { ExperienceComponent } from '../../components/experience/experience.component';
import { ProjectListComponent } from '../../components/project-list/project-list.component';
import { SkillsSectionComponent } from '../../components/skills-section/skills-section.component';
import { ContactComponent } from '../../components/contact/contact.component';

@Component({
    selector: 'app-home-page',
    standalone: true,
    imports: [
        CommonModule,
        HeroComponent,
        EducationComponent,
        ExperienceComponent,
        ProjectListComponent,
        SkillsSectionComponent,
        ContactComponent
    ],
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.css'
})
export class HomePageComponent {
}


