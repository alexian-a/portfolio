import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { Skill } from '../../models/skill.model';
import { Project } from '../../models/project.model';
import { SkillFilterComponent } from '../skill-filter/skill-filter.component';
import { ProjectCardComponent } from '../project-card/project-card.component';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule, SkillFilterComponent, ProjectCardComponent],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css'
})
export class ProjectListComponent implements OnInit {
  skills: Skill[] = [];
  projects: Project[] = [];
  selectedSkillId: string | null = null;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.skills = this.dataService.getSkills();
    this.projects = this.dataService.getProjects();
  }

  get filteredProjects(): Project[] {
    if (!this.selectedSkillId) {
      return this.projects;
    }
    return this.projects.filter(project =>
      project.skillIds.includes(this.selectedSkillId!)
    );
  }

  onSkillSelected(skillId: string | null): void {
    this.selectedSkillId = skillId;
  }
}
