import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService, EducationItem } from '../../services/data.service';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent implements OnInit {
  educationList: EducationItem[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.educationList = this.dataService.getEducation();
  }
}
