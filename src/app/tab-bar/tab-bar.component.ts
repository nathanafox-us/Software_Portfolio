import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-tab-bar',
  standalone: true,
  imports: [RouterLink, FooterComponent],
  templateUrl: './tab-bar.component.html',
  styleUrl: './tab-bar.component.scss'
})
export class TabBarComponent {

}
