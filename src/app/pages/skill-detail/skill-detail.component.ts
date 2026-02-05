import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DataService, ExperienceItem } from '../../services/data.service';
import { Skill } from '../../models/skill.model';
import { Project } from '../../models/project.model';

@Component({
    selector: 'app-skill-detail',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './skill-detail.component.html',
    styleUrl: './skill-detail.component.css'
})
export class SkillDetailComponent implements OnInit {
    skill: Skill | undefined;
    relatedProjects: Project[] = [];
    relatedExperiences: ExperienceItem[] = [];
    allSkills: Skill[] = [];

    constructor(
        private route: ActivatedRoute,
        private dataService: DataService
    ) { }

    ngOnInit(): void {
        this.allSkills = this.dataService.getSkills();
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.skill = this.dataService.getSkillById(id);
            this.relatedProjects = this.dataService.getProjectsBySkillId(id);
            this.relatedExperiences = this.dataService.getExperiencesBySkillId(id);
        }
    }

    getSkillColor(skillId: string): string {
        const skill = this.allSkills.find(s => s.id === skillId);
        return skill ? skill.color : '#666';
    }

    getSkillLabel(skillId: string): string {
        const skill = this.allSkills.find(s => s.id === skillId);
        return skill ? skill.label : skillId;
    }
}

