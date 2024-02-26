import { Component, Input, OnInit } from '@angular/core';
import { GithubProjectService } from '../github-project.service';
import { GithubLanguage } from '../github-languages';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-github-card',
  standalone: true,
  imports: [CanvasJSAngularChartsModule, TitleCasePipe],
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

    //console.log(languages);

    languageArray.forEach(language => {
      sum += language[1];
    });
    languageArray.forEach(language => {
      language[1] /= sum;
    })

    this.languages = languageArray.map(language => new GithubLanguage(language));
    //console.log(this.languages);
  })
  }

  get chartOptions() {
    return {
      title: {
        text: "Languages",
      },
      theme: "light2",
      legend: {
        maxWidth: 350,
        itemWidth: 120,
      },
      data: [{
        type: "pie",
        showInLegend: true,
        indexLabel: "{name}: {y}",
        yValueFormatString: "#,###.##'%'",
        dataPoints: this.languages.map((language) => {
          return {
            name: language.name, 
            y: 100 * (Math.round((language.count + Number.EPSILON) * 10000) / 10000)
          };
        })
      }]
    };
  }
}
