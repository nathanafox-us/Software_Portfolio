import { Component } from '@angular/core';
import { GithubCardComponent } from '../github-card/github-card.component';
import { GithubProjectService } from '../github-project.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GithubCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  projects:any;

  constructor(private _githubService:GithubProjectService) {
    _githubService.getRepos().subscribe(
      user => {
        this.projects = user;
        console.log(user);
      }
    )
  }
}
