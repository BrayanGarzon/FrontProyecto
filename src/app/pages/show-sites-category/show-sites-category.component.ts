import { Component } from '@angular/core';
import { Helper } from 'src/app/helper/helper';
import { SitesCategory } from 'src/app/interfaces/discover/category.interface';
import { Site } from 'src/app/interfaces/discover/site.interface';
import { CategoriesService } from 'src/app/services/discover/categories.service';
import { SitesService } from 'src/app/services/discover/sites.service';

@Component({
  selector: 'app-show-sites-category',
  templateUrl: './show-sites-category.component.html',
  styleUrls: ['./show-sites-category.component.css']
})
export class ShowSitesCategoryComponent {
  sitesCategory: SitesCategory[]  = []
  constructor(private categoriesService: CategoriesService, private sitesService: SitesService){
    this.getSitesCategories()

  }



  getSitesCategories(){
    this.sitesService.getSites().subscribe( data => {
      this.categoriesService.getCategories().subscribe( categoriesResponse => {
        categoriesResponse.forEach( category => {
          
          function compareByQualityDesc(a: Site, b: Site): number {
            const qualityA = parseInt(a.quality, 10);
            const qualityB = parseInt(b.quality, 10);
            return qualityB - qualityA;
          }
         var sites =  data.filter( (site: Site) => site.category.id == category.id ).sort(compareByQualityDesc).slice(0,5)
          this.sitesCategory.push({...category, sites})
        })
      })
    } );

  }

  getNumberRange(end: any) {
    return Helper.getNumberRange(1, end);
  }

}
