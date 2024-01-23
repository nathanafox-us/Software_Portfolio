export class GithubLanguage {
    name: string;
    count: any;
  
    constructor(_languages:[string, any]) {
      this.name = _languages[0];
      this.count = _languages[1];
    }
}