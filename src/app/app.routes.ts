import { Routes } from '@angular/router';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';
import { SobreNLDevComponent } from './index/pages/sobre-nldev/sobre-nldev.component';
import { LayoutPageComponent } from './index/pages/layout-page/layout-page.component';
import { ServiciosPageComponent } from './index/pages/servicios-page/servicios-page.component';
import { LoginPageComponent } from './auth/pages/login-page/login-page.component';
import { DashboardPageComponent } from './auth/pages/dashboard-page/dashboard-page.componente';
import { TaskManager } from './auth/aplicaciones/taskmanager/taskmanager.component';
import { RegistroPageComponent } from './auth/pages/register-page/registro-page.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard'

export const routes: Routes = [
  {
    path: 'index',
    component: LayoutPageComponent
  },
  {
    path: 'sobre-nldev',
    component: SobreNLDevComponent
  },
  {
    path: 'servicios',
    component: ServiciosPageComponent
  },
  {
    path: 'registro',
    component: RegistroPageComponent
  },
  //TODO: LOGIN DEBE IR EN UNA CAPA DE SEGURIDAD
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'dashboard',
    component: DashboardPageComponent,
    ...canActivate(()=> redirectUnauthorizedTo(['registro']))
  },
  {
    path: 'taskManager',
    component: TaskManager,
    ...canActivate(()=> redirectUnauthorizedTo(['registro']))
  },
  //SEGURIDAD FIN CAPA
  {
    path: '404',
    component: Error404PageComponent
  },
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '404'
  }
];
