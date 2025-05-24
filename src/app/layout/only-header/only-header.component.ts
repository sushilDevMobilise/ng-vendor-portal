import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { RouterModule } from '@angular/router';
import { Header2Component } from "../../shared/components/header2/header2.component";

@Component({
  selector: 'app-only-header',
  standalone: true,
  imports: [RouterModule, Header2Component],
  templateUrl: './only-header.component.html',
  styleUrl: './only-header.component.scss'
})
export class OnlyHeaderComponent {

}
