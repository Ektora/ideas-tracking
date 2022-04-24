import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewIdeaComponent } from './new-idea/new-idea.component';
import { ListIdeaComponent } from './list-idea/list-idea.component';
import { IdeaComponent } from './idea/idea.component';
import { VoteComponent } from './vote/vote.component';
import { IdeasRoutingModule } from './ideas-routing.module';



@NgModule({
  declarations: [
    NewIdeaComponent,
    ListIdeaComponent,
    IdeaComponent,
    VoteComponent
  ],
  imports: [
    CommonModule,
    IdeasRoutingModule
  ]
})
export class IdeasModule { }
