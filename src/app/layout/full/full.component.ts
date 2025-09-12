import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BannerSecComponent } from "../../shared/components/banner-sec/banner-sec.component";
import { FooterComponent } from "../../shared/components/footer/footer.component";
import { HeaderComponent } from "../../shared/components/header/header.component";

@Component({
  selector: 'app-full',
  standalone: true,
  imports: [HeaderComponent, RouterModule, FooterComponent, BannerSecComponent],
  templateUrl: './full.component.html',
  styleUrl: './full.component.scss'
})
export class FullComponent {

}
