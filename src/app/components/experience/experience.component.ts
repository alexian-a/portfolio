import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DataService, ExperienceItem } from '../../services/data.service';
import { Skill } from '../../models/skill.model';

@Component({
    selector: 'app-experience',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './experience.component.html',
    styleUrl: './experience.component.css'
})
export class ExperienceComponent implements OnInit {
    experiences: ExperienceItem[] = [];
    skills: Skill[] = [];

    constructor(private dataService: DataService) { }

    ngOnInit(): void {
        this.experiences = this.dataService.getExperiences();
        this.skills = this.dataService.getSkills();
    }

    getSkillLabel(skillId: string): string {
        const skill = this.skills.find(s => s.id === skillId);
        return skill ? skill.label : skillId;
    }

    getSkillColor(skillId: string): string {
        const skill = this.skills.find(s => s.id === skillId);
        return skill ? skill.color : '#666';
    }

    formatDescription(description: string): string {
        return description.replace(/\n/g, '<br>');
    }
}

