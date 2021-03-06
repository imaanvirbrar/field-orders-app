import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent, ResetPasswordFormComponent, CreateAccountFormComponent, ChangePasswordFormComponent } from './shared/components';
import { AuthGuardService } from './shared/services';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { DxDataGridModule, DxFormModule } from 'devextreme-angular';

const routes: Routes = [
  {
    path: 'tasks',
    component: TasksComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'login-form',
    component: LoginFormComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'reset-password',
    component: ResetPasswordFormComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'create-account',
    component: CreateAccountFormComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'change-password/:recoveryCode',
    component: ChangePasswordFormComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'company',
    component: HomeComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'project',
    component: HomeComponent,
    canActivate: [AuthGuardService]
  },

  {
    path: 'orders/list',
    loadChildren: () =>
      import('./orders/order-list.module').then(
        (m) => m.OrderListModule
      ),
  },
  {
    path: 'orders',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list/field'
      },
      {
        path: 'list',
        loadChildren: () =>
          import('./orders/order-list.module').then(
            (m) => m.OrderListModule
          ),
      },
      {
        path: 'details',
        loadChildren: () =>
          import('./orders/order-details.module').then(
            (m) => m.OrderDetailsModule
          ),
      },

    ]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), DxDataGridModule, DxFormModule],
  providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: [HomeComponent, ProfileComponent, TasksComponent]
})
export class AppRoutingModule { }
