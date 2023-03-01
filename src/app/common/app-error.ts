

export class AppError {
  constructor(public originalError?: any) {

  }
}//It is a good practice to get the original error inside this appError class
//because we are going to get this error somewhere log it on the server
//there are gonna be multiple appError so we can have other sub classes that extends this class
