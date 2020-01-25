import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/service/communication.service';
import { IRecipes } from 'src/app/models/recipes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public recipes: IRecipes[];

  constructor(public communicationService: CommunicationService) { }

  ngOnInit() {
    this.recipes = this.communicationService.getRecipes();
  }

}
