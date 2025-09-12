import { CommonModule } from '@angular/common'; // 👈 yeh add karo
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InnerBannerComponent } from "../../../shared/components/inner-banner/inner-banner.component";

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, InnerBannerComponent, RouterModule],  // 👈 CommonModule add kiya
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']   // 👈 styleUrl nahi, styleUrls (array) hoga
})
export class ServicesComponent {

  allServices = [
    {
      title: 'Visual Production',
      text: 'High-quality corporate photography & videography.',
      icon: 'icon-04',
      buttonIcon: 'icon-05',
      link: '/service-details/seo-marketing'
    },
    {
      title: 'Post-Production',
      text: 'Editing, color grading, motion & cinematic finishing.',
      icon: 'icon-08',
      buttonIcon: 'icon-05',
      link: '/service-details/seo-marketing'
    },
    {
      title: 'AI & Machine Learning ',
      text: 'Smart, AI-powered creative storytelling.',
      icon: 'icon-12',
      buttonIcon: 'icon-05',
      link: '/service-details/seo-marketing'
    },
    {
      title: 'Brand & Influencer Content',
      text: 'Engaging content for brands & creators.',
      icon: 'icon-04',
      buttonIcon: 'icon-05',
      link: '/service-details/seo-marketing'
    },
    
  ];
}
