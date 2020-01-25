import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IRecipes } from 'src/app/models/recipes';
import { Location } from '@angular/common';
import { CommunicationService } from 'src/app/service/communication.service';

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.css']
})
export class AllRecipesComponent implements OnInit {

  private id: number;
  public resipe: IRecipes[];

  constructor(
    private route: ActivatedRoute,
    private communicationService: CommunicationService,
    private location: Location
    ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.resipe = this.communicationService.getRecipe(this.id).version;
  }

  public goBack() {
    this.location.back();
  }
}
