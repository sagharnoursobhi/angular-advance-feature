import { Component, OnInit } from '@angular/core';
import { AppError } from '../common/app-error';
import { GithubFollowersService } from '../services/github-followers.service';

type GetFollowers = {
  imgUrl: string,
  githubUrl: string,
  loginUrl: string
}

@Component({
  selector: 'assignment9',
  templateUrl: './assignment9.component.html',
  styleUrls: ['./assignment9.component.css']
})
export class Assignment9Component implements OnInit {
  followers: Array<any> = [];

  constructor(private service: GithubFollowersService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe({
      next: (gitHubInfos: any): void => {
        gitHubInfos.forEach((item:any) => this.followers.push({ avatar: item.avatar_url, username: item.login, link: item.html_url }));
      },
      error:(err: AppError)=> {
        throw err;
      }
    })
  }

}
