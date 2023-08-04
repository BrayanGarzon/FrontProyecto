import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Site } from 'src/app/interfaces/discover/site.interface';
import { SitesService } from 'src/app/services/discover/sites.service';
import { Helper } from 'src/app/helper/helper';


@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css']
})
export class SitesComponent {
  


  categoryId: string|null;
  sites!: Site[];

  constructor(private activatedRoute: ActivatedRoute, private sitesService: SitesService) {
    this.categoryId = activatedRoute.snapshot.paramMap.get('category_id');
    this.getSitesByCategory(this.categoryId!);
  }

  getSitesByCategory(categoryId: string){
    this.sitesService.getSitesByCategory(categoryId).subscribe(sites => {
      this.sites = sites;
      
    })
  }

 


  getNumberRange(end: any) {
    return Helper.getNumberRange(1, end);
  }
}
