import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentsService, UserService } from 'src/app/services/discover';



@Component({
  selector: 'app-info-user-comment',
  templateUrl: './info-user-comment.component.html',
  styleUrls: ['./info-user-comment.component.css']
})
export class InfoUserCommentComponent {

  user:any
  sites:any

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
}
