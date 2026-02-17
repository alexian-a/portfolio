import { Injectable } from '@angular/core';
import { Skill } from '../models/skill.model';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private skills: Skill[] = [
    { id: 'realiser', label: 'Réaliser', color: '#B80905', description: 'Adapter des applications sur un ensemble de supports (embarqué, web, mobile, IoT…)' },
    { id: 'optimiser', label: 'Optimiser', color: '#ED8C51', description: 'Analyser et optimiser des applications.' },
    { id: 'administrer', label: 'Administrer', color: '#EFBA11', description: 'Déployer des services dans une architecture réseau.' },
    { id: 'gerer', label: 'Gérer', color: '#8CC850', description: 'Optimiser une base de données, intéragir avec une application et mettre en oeuvre la sécurité.' },
    { id: 'conduire', label: 'Conduire', color: '#163fadff', description: 'Appliquer une démarche de suivi de projet en fonction des besoins métiers des clients et utilisateurs.' },
    { id: 'collaborer', label: 'Collaborer', color: '#9333EA', description: 'Manager une équipe informatique.' }
  ];

  private projects: Project[] = [
    {
      id: 'p1',
      title: 'Site Virebent',
      description: "Développement de plusieurs plugins, consultation de différentes oeuvres de l'association 'Les amis de Virebent'.",
      imageUrl: 'assets/projects/virebent.jpg',
      skillIds: ['realiser', 'gerer', 'conduire', 'collaborer'],
      technologies: ['HTML', 'CSS', 'PHP', 'SQL', 'MySQL', 'JavaScript'],
      date: '2025 - 2026'
    },
    {
      id: 'p2',
      title: 'Site e-commerce',
      description: "Développement en php d'un site e-commerce de vente de matériel de sport, avec une base de données MySQL pour gérer les produits, les utilisateurs et les commandes.",
      imageUrl: 'assets/projects/larouetourne.png',
      skillIds: ['collaborer', 'conduire', 'optimiser', 'realiser'],
      technologies: ['HTML', 'CSS', 'PHP', 'SQL', 'MySQL', 'JavaScript' ],
      date: 'Janvier 2025'
    },
    {
      id: 'p3',
      title: 'FlopEDT',
      description: "Développement Back-end Python avec Django\nCréation d'interfaces utilisateur réactives avec Vue.js",
      imageUrl: 'assets/projects/flopedt.webp',
      skillIds: ['realiser', 'administrer', 'gerer'],
      technologies: ['Vue', 'Django'],
      date: 'Mai 2025'
    },
    {
      id: 'p4',
      title: 'Application de gestion bancaire',
      description: "Développement d'une application de gestion bancaire en JavaFX avec une base de données SQL Server.\nImplémentation de fonctionnalités telles que la gestion des comptes, les transactions, et la sécurité des données.",
      imageUrl: 'assets/projects/JavaFX.png',
      skillIds: ['realiser', 'optimiser', 'gerer', 'collaborer'],
      technologies: ['JavaFX', 'Oracle DB', 'sqlserver'],
      date: 'Juin 2024'
    },
    {
      id: 'p5',
      title: 'Jeu Akari',
      description: "Développement d’une interface graphique pour le jeu de réflexion Akari, avec des fonctionnalités telles que la génération de grilles, la validation des solutions, et une interface utilisateur intuitive.",
      imageUrl: 'assets/projects/akari.png',
      skillIds: ['realiser', 'optimiser'],
      technologies: ['JavaFX', 'Java', 'Scene Builder'],
      date: 'Mai 2024'
    }
  ];

  constructor() { }

  getSkills(): Skill[] {
    return this.skills;
  }

  getProjects(): Project[] {
    return this.projects;
  }

  getEducation(): EducationItem[] {
    return [
      {
        id: '1',
        degree: 'BUT Informatique 3ème année',
        institution: 'Institut Universitaire de Technologie de Blagnac',
        period: '2023 - 2026',
        description: 'Spécialisation en réalisation d’applications : conception, développement, validation.'
      },
      {
        id: '2',
        degree: 'Elève ingénieur - INSA',
        institution: 'Institut National des Sciences Appliquées de Toulouse',
        period: '2022 - 2023',
        description: 'Classes préparatoires intégrées.'
      },
      {
        id: '3',
        degree: 'Baccalauréat Sciences et Technologies de l\'Industrie et du Développement Durable',
        institution: 'Lycée polyvalent Jules Fil, Carcassonne',
        period: '2019 - 2022',
        description: 'Spécialité Systèmes Informatiques et Numérique. Mention Bien.'
      },
      {
        id: '4',
        degree: "Brevet d'Initiation Aéronautique",
        institution: 'Lycée Paul Sabatier, Carcassonne',
        period: '2020',
        description: ''
      }
    ];
  }

  getExperiences(): ExperienceItem[] {
    return [
      {
        id: 'e2',
        title: 'Stage Développeur',
        company: 'Capgemini, Toulouse',
        companyLogo: 'assets/companies/capgemini.png',
        period: 'Mars - Juillet 2026',
        description: "Projet confidentiel en base de données, pour Airbus.",
        skillIds: ['realiser', 'gerer', 'conduire', 'optimiser', 'collaborer'],
        technologies: [
          { name: 'SQL', description: '' },
          { name: 'PL/SQL', description: '' },
          { name: 'Neo4j', description: '' }
        ]
      },
      {
        id: 'e2',
        title: 'Stage Développeur Full Stack',
        company: 'IdiA Tech, Montpezat',
        companyLogo: 'assets/companies/idia_tech.png',
        period: 'Mars - Mai 2025',
        description: "Réalisation de scripts en langage propriétaire Grimport (Java), Crawling de site web, utilisation d’HTML, JavaScript, Java et SQL.\nReprise d’un projet d’assistant IA, en utilisant l’API d’OpenIA. Ainsi qu’une interface grâce au framework Streamlit en utilisant Python.",
        skillIds: ['realiser', 'conduire', 'optimiser', 'administrer', 'gerer'],
        technologies: [
          { name: 'Grimport', description: 'Langage propriétaire, basé sur Java' },
          { name: 'Java', description: '' },
          { name: 'HTML', description: '' },
          { name: 'JavaScript', description: '' },
          { name: 'SQL', description: '' },
          { name: 'Python', description: '' },
          { name: 'Streamlit', description: 'Framework pour créer des applications web en Python' },
          { name: 'Git', description: '' }
        ]
      },
      {
        id: 'e3',
        title: 'Stagiaire Développeur Front End',
        company: 'BLWM Media, Toulouse',
        companyLogo: 'assets/companies/blwm.png',
        period: 'Mars 2023',
        description: 'Création de composants front, avec la librairie React. Intégration des composants et communication avec le back en Lua.\nAdministration d’une base de données MySQL, optimisation des requêtes.',
        skillIds: ['realiser', 'optimiser', 'administrer', 'gerer', 'collaborer'],
        technologies: [
          { name: 'React', description: '' },
          { name: 'TypeScript', description: '' },
          { name: 'Lua', description: '' },
          { name: 'SQL', description: '' },
          { name: 'MySQL', description: '' },
          { name: 'Git', description: '' }
        ]
      }
    ];
  }

  getSkillById(id: string): Skill | undefined {
    return this.skills.find(s => s.id === id);
  }

  getProjectById(id: string): Project | undefined {
    return this.projects.find(p => p.id === id);
  }

  getProjectsBySkillId(skillId: string): Project[] {
    return this.projects.filter(p => p.skillIds.includes(skillId));
  }

  getSkillsByProjectId(projectId: string): Skill[] {
    const project = this.getProjectById(projectId);
    if (!project) return [];
    return this.skills.filter(s => project.skillIds.includes(s.id));
  }

  getExperiencesBySkillId(skillId: string): ExperienceItem[] {
    return this.getExperiences().filter(e => e.skillIds.includes(skillId));
  }
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface Technology {
  name: string;
  description: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  companyLogo?: string;
  period: string;
  description: string;
  skillIds: string[];
  technologies?: Technology[];
}

