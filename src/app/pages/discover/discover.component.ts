import { Component, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Category } from 'src/app/interfaces/discover/category.interface';
import { CategoriesService } from 'src/app/services/discover/categories.service';
import { ShowsitesComponent } from '../showsites/showsites.component';



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
    margin: 10,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1 
      },
      400: {
        items: 2
      },
      760: {
        items: 3
      },
      1000: {
        items: 4
      }
    },
    nav: true
  }

  category!: Category;

  categories!: Category[];
  @ViewChild(ShowsitesComponent) showsitesComponent?: ShowsitesComponent;

  constructor(private categoriesService: CategoriesService) {
    this.getCategories()
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
