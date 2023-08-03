import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Helper } from 'src/app/helper/helper';
import { Comment } from 'src/app/interfaces/discover/comment.interface';
import { CommentsService } from 'src/app/services/discover/comments.service';
import { SitesService } from 'src/app/services/discover/sites.service';





@Component({
  selector: 'app-showcomments',
  templateUrl: './showcomments.component.html',
  styleUrls: ['./showcomments.component.css']
})
export class ShowcommentsComponent {
// Método para expandir o contraer el comentario
toggleExpand(comment: any) {
  comment.expanded = !comment.expanded;
}

// Función para obtener el texto del botón dinámicamente
getButtonText(comment: any): string {
  return comment.expanded ? 'Ver menos' : 'Ver más';
}
  
  private siteId: string | null;
  site: any;
  comments: Comment[] = [];

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




  

  constructor(private sitesService: SitesService, private commentsService: CommentsService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.siteId = activatedRoute.snapshot.paramMap.get('site_id');
    this.getSite(this.siteId!)
    this.getCommentsBySite(this.siteId!)
  }

  getSite(siteId: string) {
    this.sitesService.getSiteById(siteId).subscribe(response => {
      this.site = response;
      
    })
  }

  getCommentsBySite(siteId: string) {
    this.commentsService.getCommentsBySite(siteId).subscribe((response: Comment[]) => {

      this.comments = response;

    })
  }

  getClass(key: string): string {
    let classes: string = "";
    switch (key) {
      case "Facebook":
        classes = "fa fa-facebook-square"
        break
      case "Instagram":
        classes = "fa fa-instagram"
        break
      case "YouTube":
        classes = "fa fa-youtube-play"
        break
      case "Redis":
        classes = "fa fa-whatsapp"
        break
      case "whatsApp":
        classes = "fa fa-whatsapp"
        break
      default:
        classes = ""
        break;
    }
    return classes;
  }

  getNumberRange(end: any) {
    return Helper.getNumberRange(1, end);
  }




}




