import { Routes } from '@angular/router';
import {BaseLandingComponent} from './presentation/pages/base-landing/base-landing.component';
import {LoginComponent} from './presentation/pages/login/login.component';
import {RegisterComponent} from './presentation/pages/register/register.component';
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
  BaseCustomerComponent
} from './presentation/features/space-client/presentation/layout/base-customer/base-customer.component';

import {ReservationBienComponent} from './presentation/pages/reservation-bien/reservation-bien.component';
import {BienAlmedaComponent} from './presentation/pages/detail-biens/bien-almeda/bien-almeda.component';
import {BienBelleVueComponent} from './presentation/pages/detail-biens/bien-belle-vue/bien-belle-vue.component';
import {BienBonheurComponent} from './presentation/pages/detail-biens/bien-bonheur/bien-bonheur.component';
import {BienCiteSoleilComponent} from './presentation/pages/detail-biens/bien-cite-soleil/bien-cite-soleil.component';
import {BienNabilComponent} from './presentation/pages/detail-biens/bien-nabil/bien-nabil.component';
import {BienPalmComponent} from './presentation/pages/detail-biens/bien-palm/bien-palm.component';
import {BienPalmeraieComponent} from './presentation/pages/detail-biens/bien-palmeraie/bien-palmeraie.component';
import {BienPalmiersComponent} from './presentation/pages/detail-biens/bien-palmiers/bien-palmiers.component';

import {
  ListReservationComponent
} from './presentation/features/space-owner/presentation/layout/list-reservation/list-reservation.component';
import {AddBiensComponent} from './presentation/features/space-owner/presentation/shared/add-biens/add-biens.component';
import {
  ListBiensOwnerComponent
} from './presentation/features/space-owner/presentation/layout/list-biens-owner/list-biens.component';
import {
  InfosOwnerComponent
} from './presentation/features/space-owner/presentation/layout/infos-owner/infos-owner.component';
import {
  UpdateInfoOwnerComponent
} from './presentation/features/space-owner/presentation/shared/update-info-owner/update-info-owner.component';
import {
  ListReservationCustomerComponent
} from './presentation/features/space-client/presentation/layout/list-reservation-customer/list-reservation-customer.component';
import {
  DetailReservationCustomerComponent
} from './presentation/features/space-client/presentation/layout/detail-reservation-customer/detail-reservation-customer.component';
import {
  InfosPersoCustomerComponent
} from './presentation/features/space-client/presentation/layout/infos-perso-customer/infos-perso-customer.component';

export const routes: Routes = [
  {path: "home" , component: BaseLandingComponent},
  {path: "login" , component: LoginComponent},
  {path: "register" , component: RegisterComponent},
  {path: "biens" , component: ListBiensComponent},
  {path: "" , redirectTo: "home" , pathMatch:"full"},
  {path: "validate-email/:email" , component: ValidateEmailComponent},
  {path: "reset-password-first" , component: ResetPassword1Component},
  {path: "reservation-bien" , component: ReservationBienComponent},
  {path: "bien-almeda" , component: BienAlmedaComponent},
  {path: "bien-belle-vue" , component: BienBelleVueComponent},
  {path: "bien-bonheur" , component: BienBonheurComponent},
  {path: "bien-cite-soleil" , component: BienCiteSoleilComponent},
  {path: "bien-nabil" , component: BienNabilComponent},
  {path: "bien-palm" , component: BienPalmComponent},
  {path: "bien-palmeraie" , component: BienPalmeraieComponent},
  {path: "bien-palmiers" , component: BienPalmiersComponent},
  {path: "admin" , component: BaseAdminComponent , children: [
      {path: "dashboard" , component: DashboardComponent}
    ]},
  {path: "owner" , component: BaseOwnerComponent , children: [
      {path: "list-reservation" , component: ListReservationComponent},
      {path: "list-biens" , component: ListBiensOwnerComponent},
      {path: "add-bien" , component: AddBiensComponent},
      {path: "profil" , component: InfosOwnerComponent},
      {path: "update-owner" , component: UpdateInfoOwnerComponent}

    ]},
  {path: "customer" , component: BaseCustomerComponent ,
    children: [
      {path: "list-reservation" , component: ListReservationCustomerComponent},
      {path: "detail-reservation" , component: DetailReservationCustomerComponent},
      {path: "infos" , component: InfosPersoCustomerComponent}
    ]}
];
