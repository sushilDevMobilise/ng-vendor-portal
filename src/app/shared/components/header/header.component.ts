import { Component } from '@angular/core';
import { AuthRoutingModule } from "../../../modules/auth/auth-routing.module";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AuthRoutingModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
