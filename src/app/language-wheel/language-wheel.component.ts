import { Component, Input } from '@angular/core';
import { GithubLanguage } from '../github-languages';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

@Component({
  selector: 'app-language-wheel',
  standalone: true,
  imports: [      
    CanvasJSAngularChartsModule
  ],
  templateUrl: './language-wheel.component.html',
  styleUrl: './language-wheel.component.scss'
})
export class LanguageWheelComponent {
  @Input() languages:GithubLanguage[] = [];

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
