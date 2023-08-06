import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Helper } from 'src/app/helper/helper';
import { CommentsService, UserService } from 'src/app/services/discover';



@Component({
  selector: 'app-info-user-comment',
  templateUrl: './info-user-comment.component.html',
  styleUrls: ['./info-user-comment.component.css']
})
export class InfoUserCommentComponent {

  user:any
  sites:any
  // Función para obtener el texto del botón dinámicamente content: "\2B50";
getButtonText(comment: any): string {
  return comment.expanded ? 'Ver menos' : 'Ver más';
}

calculateMissingStars(quality: number | undefined): number {
  return 5 - (quality || 0);
}

  constructor(private route:ActivatedRoute,  private userService: UserService, private commentService:CommentsService){
    this.userService.getUserById(parseInt(this.route.snapshot.queryParamMap.get('user')!)).subscribe( res =>{
      console.log(res)
      this.user = {...res, gender: (res.gender == 'M' || res.gender == 'm' ? 'Masculino': 'Femenino')}
    } )

    this.commentService.getCommentsByUserId( parseInt(this.route.snapshot.queryParamMap.get('user')!) ).subscribe( res => {
      console.log(res)
      this.sites = res
    } )
  }
  getNumberRange(end: any) {
    return Helper.getNumberRange(1, end);
  }
 
}
