import { Component } from '@angular/core';
import { Recommended } from 'src/app/interfaces/discover/recommended.interface';
import { RecommendedService } from 'src/app/services/discover/recommended.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  recommended!: Recommended[];

  constructor (private recommendedService: RecommendedService) {
    this.getRecommended()
  }

  getRecommended() {
    this.recommendedService.getRecommended()
      .subscribe(response=> {
        this.recommended = response
        
      })
  }
}