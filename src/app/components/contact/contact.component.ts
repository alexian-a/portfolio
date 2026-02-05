import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.css'
})
export class ContactComponent {
    formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
    };

    isSubmitting = false;
    submitStatus: 'idle' | 'success' | 'error' = 'idle';
    statusMessage = '';

    async onSubmit(): Promise<void> {
        if (!this.formData.name || !this.formData.email || !this.formData.message) {
            this.submitStatus = 'error';
            this.statusMessage = 'Veuillez remplir tous les champs obligatoires.';
            return;
        }

        this.isSubmitting = true;
        this.submitStatus = 'idle';

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    access_key: '97a86d7e-6f2f-42a2-afee-e4127a5c42c8',
                    name: this.formData.name,
                    email: this.formData.email,
                    subject: this.formData.subject || 'Contact depuis le Portfolio',
                    message: this.formData.message,
                }),
            });

            const result = await response.json();

            if (result.success) {
                this.submitStatus = 'success';
                this.statusMessage = 'Message envoyé avec succès ! Je vous répondrai rapidement.';
                this.formData = { name: '', email: '', subject: '', message: '' };
            } else {
                throw new Error('Erreur lors de l\'envoi');
            }
        } catch (error) {
            this.submitStatus = 'error';
            this.statusMessage = 'Une erreur est survenue. Veuillez réessayer ou me contacter directement.';
        } finally {
            this.isSubmitting = false;
        }
    }

    downloadCV(): void {
        const link = document.createElement('a');
        link.href = 'assets/cv-alexian.pdf';
        link.download = 'CV-Alexian.pdf';
        link.click();
    }
}
