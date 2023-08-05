import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DiscoverComponent } from './pages/discover/discover.component';
import { SitesComponent } from './pages/sites/sites.component';
import { ContactComponent } from './pages/contact/contact.component';
import { Error404Component } from './pages/error404/error404.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { CommentComponent } from './pages/comment/comment.component';
import { AuthGuard } from './guards/auth.guard';
import { ShowcommentsComponent } from './pages/showcomments/showcomments.component';

import { UpdateuserComponent } from './pages/updateuser/updateuser.component';

import { CreditosComponent } from './pages/creditos/creditos.component';
import { InfoPerfilUsuarioComponent } from './pages/info-perfil-usuario/info-perfil-usuario.component';
import { ShowSitesByCategoryComponent } from './pages/show-sites-by-category/show-sites-by-category.component';

import { InfoUserCommentComponent } from './pages/info-user-comment/info-user-comment.component';

const routes: Routes = [
  // { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "", component: HomeComponent },
  { path: "discover", component: DiscoverComponent },
  { path: "categoria/:id", component: ShowSitesByCategoryComponent },
  

  { path: "infoUserComment", component: InfoUserCommentComponent },
  // { path: "discover/sites", component: ShowsitesComponent },
  // { path: "discover/sites/:category_id", component: SitesComponent },
  { path: "discover/comments/show/:site_id", component: ShowcommentsComponent },
  { path: "discover/comment/sites/:site_id", component: CommentComponent, canActivate: [AuthGuard] },
  { path: "contact", component: ContactComponent },
  { path: "login", component: LoginComponent },
  { path: "update/user", component: UpdateuserComponent, canActivate: [AuthGuard] },
  { path: "register", component: RegisterComponent },
  { path: "creditos", component: CreditosComponent },
  { path: "infoPerfilUsuario", component: InfoPerfilUsuarioComponent},
  { path: "**", component: Error404Component },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
