import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

type Data = {
  title: string,
  isFavorite: boolean
}

/* export interface TweetArguments {
  body: string,
  isLiked: boolean,
  likesCount: number
} */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Angular App';
  
  data: Data = {
    title: "first title as an input",
    isFavorite: true
  }

  tweet: any = {
    isLiked: true,
    likesCount: 10
  }


  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log("favorite changed", eventArgs.newValue);
  }


}
