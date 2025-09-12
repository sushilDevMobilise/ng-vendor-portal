import { Component } from '@angular/core';
import { InnerBannerComponent } from "../../../shared/components/inner-banner/inner-banner.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [InnerBannerComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
