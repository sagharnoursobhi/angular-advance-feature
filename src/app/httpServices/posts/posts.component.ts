
import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { AppError } from '../../common/app-error';
import { NotFoundError } from '../../common/not-found-error';
import { BadInputError } from '../../common/bad-input-error';
import { NotGetError } from '../../common/not-get-error';

type GetDataType = {
	userId?: number,
	id: number | undefined,
	title: string | undefined,
	body?: string,
	isRead?: boolean | undefined
}

@Component({
	selector: 'posts',
	templateUrl: './posts.component.html',
	styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

	posts: Array<GetDataType> = [];
	/* text = {} as DataType;
	text = <DataType>{} */


	constructor(private service: PostService) {

	}

	ngOnInit(): void {
		this.service.getPost()
			.subscribe(
				{
					next: (response: GetDataType[] | any): void => {
						this.posts = response;
					},
					error: (err: AppError) => {
						if(err instanceof NotGetError) {
              console.log('Data is not fetched');
            } else
						//we need to annotate then there is an intelliSence and type compiling and then we have access to all the
						//response class memebers
            console.log('An uxpected error has occured')
					}
				}
			)
	}


	createPost(input: HTMLInputElement) {
		let post: any = {
			title: input.value,
		}

		input.value = '';

		this.service.createPost(post)
				.subscribe({
					next: (response: any ) => {
						console.log(response.id)
						console.log(post);
						this.posts.splice(0, 0, post);
					},
					error: (err: AppError) => {
						if(err instanceof BadInputError) {
              console.log('this post has already been created');
              //this.form.setError(err);
            } else {
              console.log('An unexpected error occured!');
            }
					}
				})

	}

	updatePost(post: any) {

		this.service.updatePost(post)
			.subscribe({
				next: (response: any) => {
					console.log(response)
				},
				error: (err) => {
					console.log('An unexpected method occured!');
					console.log(err);
				}
			});

		//If we want to use the put method we have to send the complete object
		/* this.http.put(this.url, { isRed: true }).subscribe(response => {
			console.log(response)
		}) */
	}

	deletePost(post: any) {
		this.service.deletePost(post.id)
			.subscribe({
				next: (response: any) => {
          console.log(response)
					let index = this.posts.indexOf(post);
					this.posts.splice(index, 1);
				},
				error: (err: AppError) => {
					if(err instanceof NotFoundError) {
						alert('This post has already been deleted.');
					} else {
						alert('An unexpected error has occured.');
					}
					//we need to annotate then there is an intelliSence and type compiling and then we have access to all the
					//response class memebers
          //when we are done with appError object instead of working with response object we are going to work with appError
          //or one of its derivatives
				}
			})
	}
}
