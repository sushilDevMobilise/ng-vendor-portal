import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/components/header/header.component";
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from "../../shared/components/footer/footer.component";

@Component({
  selector: 'app-full',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, RouterModule, FooterComponent],
  templateUrl: './full.component.html',
  styleUrl: './full.component.scss'
})
export class FullComponent {

}
