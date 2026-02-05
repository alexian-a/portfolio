import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Skill } from '../../models/skill.model';

@Component({
  selector: 'app-skill-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-filter.component.html',
  styleUrl: './skill-filter.component.css'
})
export class SkillFilterComponent {
  @Input() skills: Skill[] = [];
  @Input() selectedSkillId: string | null = null;
  @Output() skillSelected = new EventEmitter<string | null>();

  selectSkill(skillId: string): void {
    if (this.selectedSkillId === skillId) {
      this.skillSelected.emit(null); // Deselect if already selected
    } else {
      this.skillSelected.emit(skillId);
    }
  }
}
