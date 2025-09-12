import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inner-banner',
  templateUrl: './inner-banner.component.html',
  standalone: true,            // <-- make it standalone
  imports: [CommonModule], 
  styleUrls: ['./inner-banner.component.scss']
})
export class InnerBannerComponent {
  @Input() title = '';
  @Input() paragraph = '';
}
