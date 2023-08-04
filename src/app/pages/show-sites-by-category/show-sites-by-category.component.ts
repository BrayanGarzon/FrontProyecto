import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Helper } from 'src/app/helper/helper';
import { Site } from 'src/app/interfaces/discover/site.interface';
import { SitesService } from 'src/app/services/discover';

@Component({
  selector: 'app-show-sites-by-category',
  templateUrl: './show-sites-by-category.component.html',
  styleUrls: ['./show-sites-by-category.component.css']
})


export class ShowSitesByCategoryComponent {

  id!: string | null;
  sites: Site[] = [];
  public filtro: string = '';


  constructor(private route: ActivatedRoute, private siteService: SitesService) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.siteService.getSites('', this.id!).subscribe(data => this.sites = data)
  }
  getNumberRange(end: any) {
    return Helper.getNumberRange(1, end);
  }

  getSites(){
    this.siteService.getSites(this.filtro, this.id!).subscribe(sites => {
      this.sites = sites;
    })
  }



  filter() {
    this.getSites();
  }

  clearFilter() {
    this.filtro = "";
  }

  getFilledStars(quality: number | undefined): number {
    const qualityNumber = parseInt(!!quality ? quality.toString() : '0', 10); // Convierte a número, si es nulo, será 0
    return Math.min(Math.max(qualityNumber, 0), 5);
  }
  
  
  getEmptyStars(quality: number | undefined): number {
    return 5 - this.getFilledStars(quality);
  }

}
