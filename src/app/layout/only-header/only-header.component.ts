import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-only-header',
  standalone: true,
  imports: [HeaderComponent,  RouterModule],
  templateUrl: './only-header.component.html',
  styleUrl: './only-header.component.scss'
})
export class OnlyHeaderComponent {

}
