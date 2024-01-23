import { Component, Input, OnInit } from '@angular/core';
import { GithubProjectService } from '../github-project.service';
import { GithubLanguage } from '../github-languages';
import { LanguageWheelComponent } from '../language-wheel/language-wheel.component';

@Component({
  selector: 'app-github-card',
  standalone: true,
  imports: [LanguageWheelComponent],
  templateUrl: './github-card.component.html',
  styleUrl: './github-card.component.scss'
})
export class GithubCardComponent implements OnInit{
  @Input() projectTitle?: string;
  @Input() projectDetails?: string;
  @Input() languagesUrl!: string;
  @Input() cloneUrl?: string;

  languages:GithubLanguage[] = [];

  private _projectService: GithubProjectService;

  constructor(private _githubService:GithubProjectService) {this._projectService = _githubService;}

  //Set the languages [] -> [string, num] 
  //   where 0 < num < 1 representatively
  ngOnInit(): void {
    this._projectService.getLanguages(this.languagesUrl).subscribe((languages) => {
    let sum = 0;
    let languageArray = Object.entries(languages);

    console.log(languages);

    languageArray.forEach(language => {
      sum += language[1];
    });
    languageArray.forEach(language => {
      language[1] /= sum;
    })

    this.languages = languageArray.map(language => new GithubLanguage(language));
    console.log(this.languages);
  })
  }
}
