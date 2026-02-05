import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Skill } from '../../models/skill.model';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './skills-section.component.html',
  styleUrl: './skills-section.component.css'
})
export class SkillsSectionComponent implements OnInit {
  skills: Skill[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.skills = this.dataService.getSkills();
  }
}
