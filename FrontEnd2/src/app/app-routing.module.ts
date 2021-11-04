import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { CreatePublicComponent } from './container/create-public/create-public.component';
import { MainComponent } from './container/main/main.component';
import { MuroPublicacionesComponent } from './container/muro-publicaciones/muro-publicaciones.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './services/guards/login.guard';
import { RoleGuard } from './services/guards/role.guard';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'container',
    component: ContainerComponent,
    canActivate: [LoginGuard],
    children: [
      {
        path: 'main',
        component: MainComponent
      },
      {
        path: 'create-public',
        component: CreatePublicComponent,
        canActivate: [RoleGuard],
        data: { role: "Administrador" }
      },
      {
        path: 'muro-publicaciones',
        component: MuroPublicacionesComponent,
        canActivate: [RoleGuard],
        data: { role: "Viewer" }
      },

    ]
  },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
