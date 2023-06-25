import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/discover/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  public isLogged: boolean = false;
  @ViewChild('header') header!: ElementRef<HTMLInputElement>;

  constructor(private authService: AuthService, private router: Router) {
    var token = localStorage.getItem('token');
    if (token) {
      this.authService.authMe(token).subscribe( resp => {
        this.isLogged = true;
        console.log(this.isLogged);
        console.log(resp);
        
        localStorage.setItem('user_id', resp.id)
      }, error => {
        this.isLogged = false
        console.log(this.isLogged);
      })
    }
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/discover')
  }

  isHome() {
    var status = this.router.url === "/";
    if (this.header) {
      const element = this.header.nativeElement;
      status ? element.id = "header" : element.id = "no-scroll";
    }
    return status
  }

  getClass() {
    return this.isHome() ? "header" : "header scroll-header";
  }

}
