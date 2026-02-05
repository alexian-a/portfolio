import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SkillDetailComponent } from './pages/skill-detail/skill-detail.component';
import { ProjectDetailComponent } from './pages/project-detail/project-detail.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'skill/:id', component: SkillDetailComponent },
    { path: 'project/:id', component: ProjectDetailComponent },
    { path: '**', redirectTo: '' }
];
