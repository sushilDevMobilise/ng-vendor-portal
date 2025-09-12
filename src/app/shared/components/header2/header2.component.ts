import { Component } from '@angular/core';
import { AuthRoutingModule } from "../../../modules/auth/auth-routing.module";

@Component({
  selector: 'app-header2',
  standalone: true,
  imports: [AuthRoutingModule],
  templateUrl: './header2.component.html',
  styleUrl: './header2.component.scss'
})
export class Header2Component {

}
