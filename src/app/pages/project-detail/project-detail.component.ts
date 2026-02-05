import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Skill } from '../../models/skill.model';
import { Project } from '../../models/project.model';

@Component({
    selector: 'app-project-detail',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './project-detail.component.html',
    styleUrl: './project-detail.component.css'
})
export class ProjectDetailComponent implements OnInit {
    project: Project | undefined;
    relatedSkills: Skill[] = [];

    constructor(
        private route: ActivatedRoute,
        private dataService: DataService
    ) { }

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.project = this.dataService.getProjectById(id);
            this.relatedSkills = this.dataService.getSkillsByProjectId(id);
        }
    }
}
