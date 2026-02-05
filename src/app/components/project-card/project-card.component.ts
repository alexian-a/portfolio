import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Project } from '../../models/project.model';
import { Skill } from '../../models/skill.model';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input() project!: Project;
  @Input() skills: Skill[] = [];

  getProjectSkills(): Skill[] {
    if (!this.project || !this.skills) return [];
    return this.skills.filter(skill => this.project.skillIds.includes(skill.id));
  }
}
