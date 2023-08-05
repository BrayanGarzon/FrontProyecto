import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Helper } from 'src/app/helper/helper';
import { Site } from 'src/app/interfaces/discover/site.interface';
import { SitesService } from 'src/app/services/discover/sites.service';



@Component({
  selector: 'app-showsites',
  templateUrl: './showsites.component.html',
  styleUrls: ['./showsites.component.css']
})
export class ShowsitesComponent {

  sites: Site[] = [];
  
  

  public filtro: string = '';
  @Input('category') category: any;

  constructor(private activatedRoute: ActivatedRoute, private sitesService: SitesService) {
    this.getSites();
  }

  getSites(){
    let category = this.category ?  this.category.id : "";
    this.sitesService.getSites(this.filtro, category).subscribe(sites => {
      this.sites = sites;
    })
  }

  getSitesByCategory(category: string){
    this.sitesService.getSites("", category).subscribe(sites => {
      this.sites = sites;
    })
  }

  filter() {
    this.getSites();
  }

  clearFilter() {
    this.filtro = "";
  }

  getNumberRange(end: any) {
    return Helper.getNumberRange(1, end);
  }

}

