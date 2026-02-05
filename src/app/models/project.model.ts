export interface Project {
    id: string;
    title: string;
    description: string;
    imageUrl?: string; // URL to the project preview image
    skillIds: string[]; // IDs of the Skills (BUT Competencies) associated with this project
    technologies: string[]; // List of specific technologies used (e.g., 'Angular', 'Java')
    date?: string; // Optional date or period
    link?: string; // Optional link to the live project or repo
}
