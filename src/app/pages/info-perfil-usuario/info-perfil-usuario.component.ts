import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/discover/user.interface';
import { UserService } from 'src/app/services/discover';




@Component({
  selector: 'app-info-perfil-usuario',
  templateUrl: './info-perfil-usuario.component.html',
  styleUrls: ['./info-perfil-usuario.component.css']
})
export class InfoPerfilUsuarioComponent {
user: any;




  constructor(private userService: UserService){
    this.userService.getUserData().subscribe(data => {
      this.user=data;
    })
  }
}


