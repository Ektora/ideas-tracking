import { Component, OnInit } from '@angular/core';
import { IdeaService } from '../idea.service';
import { Idea } from '../models/idea.model';

@Component({
  selector: 'app-list-idea',
  templateUrl: './list-idea.component.html',
  styleUrls: ['./list-idea.component.scss']
})
export class ListIdeaComponent implements OnInit {
  ideas: Idea[] = [];
  constructor(private ideaService: IdeaService) { }

  ngOnInit(): void {
    this.listIdeas();
  }
  listIdeas(){
    this.ideaService.listIdeas().subscribe(ideas => this.ideas = ideas);
  }

  upvote(idea: Idea){
    this.ideaService.upvoteIdea(idea).subscribe(_ => this.listIdeas());
  }

  downvote(idea: Idea){
    this.ideaService.downvoteIdea(idea).subscribe(_ => this.listIdeas());
  }

  deleteIdea(idea: Idea){
    this.ideaService.deleteIdea(idea).subscribe(_ => this.listIdeas());
  }
}
