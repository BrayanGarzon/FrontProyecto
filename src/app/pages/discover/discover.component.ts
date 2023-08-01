import { Component, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Category, SitesCategory } from 'src/app/interfaces/discover/category.interface';
import { CategoriesService } from 'src/app/services/discover/categories.service';
import { ShowsitesComponent } from '../showsites/showsites.component';
import { SitesService } from 'src/app/services/discover/sites.service';
import { Site } from 'src/app/interfaces/discover/site.interface';



@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent {

  customOptions: OwlOptions = {
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    margin: 0,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1 
      },
      200: {
        items: 2
      },
      500: {
        items: 3
      },
      700: {
        items: 4
      }
    },
    nav: true
  }

  category: Category | null = null ;


  categories!: Category[];
  @ViewChild(ShowsitesComponent) showsitesComponent?: ShowsitesComponent;

  constructor( private sitesService: SitesService,  private categoriesService: CategoriesService) {
  }

  getCategories() {
    this.categoriesService.getCategories().subscribe(categories => {
      this.categories = categories;
    })
  }



  updateCategory(category: Category) {
    this.category = category;
    this.showsitesComponent?.getSitesByCategory(this.category.id.toString())
    this.showsitesComponent?.clearFilter();
  }

}
