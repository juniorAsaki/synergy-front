import { Routes } from '@angular/router';
import {BaseLandingComponent} from './presentation/pages/base-landing/base-landing.component';
import {LoginComponent} from './presentation/pages/login/login.component';
import {RegisterComponent} from './presentation/pages/register/register.component';
import {DetailBienComponent} from './presentation/pages/detail-bien/detail-bien.component';
import {ListBiensComponent} from './presentation/pages/list-biens/list-biens.component';
import {ValidateEmailComponent} from './presentation/pages/validate-email/validate-email.component';
import {ResetPassword1Component} from './presentation/pages/reset-password-1/reset-password-1.component';
import {
  BaseAdminComponent
} from './presentation/features/space-admin/presentation/layout/base-admin/base-admin.component';
import {
  DashboardComponent
} from './presentation/features/space-admin/presentation/layout/dashboard/dashboard.component';
import {
  BaseOwnerComponent
} from './presentation/features/space-owner/presentation/layout/base-owner/base-owner.component';
import {
  DashboardOwnerComponent
} from './presentation/features/space-owner/presentation/layout/dashboard-owner/dashboard.owner.component';
import {
  BaseCustomerComponent
} from './presentation/features/space-client/presentation/layout/base-customer/base-customer.component';
import {
  DashboardCustomerComponent
} from './presentation/features/space-client/presentation/layout/dashboard-customer/dashboard.customer.component';
import {ReservationBienComponent} from './presentation/pages/reservation-bien/reservation-bien.component';

export const routes: Routes = [
  {path: "home" , component: BaseLandingComponent},
  {path: "login" , component: LoginComponent},
  {path: "register" , component: RegisterComponent},
  {path: "biens" , component: ListBiensComponent},
  {path: "detail" , component: DetailBienComponent},
  {path: "" , redirectTo: "home" , pathMatch:"full"},
  {path: "validate-email/:email" , component: ValidateEmailComponent},
  {path: "reset-password-first" , component: ResetPassword1Component},
  {path: "reservation-bien" , component: ReservationBienComponent},
  {path: "admin" , component: BaseAdminComponent , children: [
      {path: "dashboard" , component: DashboardComponent}
    ]},
  {path: "owner" , component: BaseOwnerComponent , children: [
      {path: "dashboard" , component: DashboardOwnerComponent}
    ]},
  {path: "customer" , component: BaseCustomerComponent , children: [
      {path: "dashboard" , component: DashboardCustomerComponent}
    ]}
];
