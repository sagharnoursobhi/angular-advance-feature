
import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { AppError } from '../../common/app-error';
import { NotFoundError } from '../../common/not-found-error';
import { BadInputError } from '../../common/bad-input-error';

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


	constructor(private service: PostService) {}

	ngOnInit(): void {
		this.service.getAll()
			.subscribe(
				{
					next: (posts: GetDataType[] | any): void => this.posts = posts
				}
			)
	}


	createPost(input: HTMLInputElement) {
		let post: any = {
			title: input.value,
		}
    this.posts.splice(0, 0, post);

		input.value = '';

		this.service.create(post)
				.subscribe({
					next: (newPost: any ) => {
            post.id = newPost.id;
            console.log(post)
					},
					error: (err: AppError) => {
            this.posts.splice(0,1);

						if(err instanceof BadInputError) {
              console.log(err.originalError);
              //this.form.setError(err);
            } else {
              throw err;
            }
					}
				})

	}

	updatePost(post: any) {
		this.service.update(post)
			.subscribe({
				next: (response: any) => {
					console.log(response)
				}
			});

		//If we want to use the put method we have to send the complete object
		/* this.http.put(this.url, { isRed: true }).subscribe(response => {
			console.log(response)
		}) */
	}

	deletePost(post: any) {
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

		this.service.delete(post.id)
			.subscribe({
				/* next: () => {//We don't get any object from the server so we don't need response
				}, */
        next: ()=>null,
				error: (err: AppError) => {
          this.posts.splice(index,0, post);

          console.log(err, 'before line 93');
					if(err instanceof NotFoundError) {
						alert('This post has already been deleted.');
					} else {
            throw err;
					}
				}
			})
    //we need to annotate then there is an intelliSence and type compiling and then we have access to all the
    //response class memebers
    //when we are done with appError object instead of working with response object we are going to work with appError
    //or one of its derivatives
	}
}
