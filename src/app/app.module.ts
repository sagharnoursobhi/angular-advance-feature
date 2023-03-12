import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesService } from './courses.service';
import { CoursesComponent } from './courses.component';
import { TestComponent } from './test.component';
import { CourseComponent } from './course/course.component';
import { AuthorsComponent } from './authors/authors.component';
import { CountryCapitalComponent } from './country.component';
import { ReviewComponent } from './review/review.component';
import { AuthorsService } from './authors/authors.service';
import { SecCountryComponent } from './secCountry.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { PipesComponent } from './pipes/pipes.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { DirectivesComponent } from './directives/directives.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SummaryPipe } from '../app/pipes/summary.pipe';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { ParentForHook } from './lifecycle-hooks/parentForHooks.component';
import { NgOnInit } from './lifecycle-hooks/ngOnInit.component';
import { NgDoCheckCom } from './lifecycle-hooks/ngDoCheck.component';
import { Assignment5Component } from './assignment5/assignment5.component';
import { Assignment6Component } from './assignment6/assignment6.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { Assignment8Component } from './assignment8/assignment8.component';
import { PostsComponent } from './httpServices/posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from 'src/app/services/post.service';
import { AppErrorHandler } from './common/app-error-handler';
import { DataService } from 'src/app/services/data.service';
import { Assignment9Component } from './assignment9/assignment9.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    TestComponent,
    CourseComponent,
    AuthorsComponent,
    CountryCapitalComponent,
    ReviewComponent,
    SecCountryComponent,
    TwoWayBindingComponent,
    PipesComponent,
    FavoriteComponent,
    PanelComponent,
    LikeComponent,
    DirectivesComponent,
    InputFormatDirective,
    ContactFormComponent,
    SummaryPipe,
    LifecycleHooksComponent,
    ParentForHook,
    NgOnInit,
    NgDoCheckCom,
    Assignment5Component,
    Assignment6Component,
    SignupFormComponent,
    NewCourseFormComponent,
    FormBuilderComponent,
    Assignment8Component,
    PostsComponent,
    Assignment9Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    PostService,
    DataService,
    CoursesService,
    AuthorsService,
    {provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
