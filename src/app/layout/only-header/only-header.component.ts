import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from "../../shared/components/footer/footer.component";
import { Header2Component } from "../../shared/components/header2/header2.component";
import { InnerBannerComponent } from "../../shared/components/inner-banner/inner-banner.component";

@Component({
  selector: 'app-only-header',
  standalone: true,
  imports: [RouterModule, Header2Component, InnerBannerComponent, FooterComponent],
  templateUrl: './only-header.component.html',
  styleUrl: './only-header.component.scss'
})
export class OnlyHeaderComponent {

}
