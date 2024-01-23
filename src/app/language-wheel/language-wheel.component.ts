import { Component, Input } from '@angular/core';
import { GithubLanguage } from '../github-languages';

@Component({
  selector: 'app-language-wheel',
  standalone: true,
  imports: [],
  templateUrl: './language-wheel.component.html',
  styleUrl: './language-wheel.component.scss'
})
export class LanguageWheelComponent {
  @Input() languages:GithubLanguage[] = [];
}
