import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbCardModule,
  NbButtonModule,
  NbInputModule,
  NbUserModule,
  NbIconModule,
  NbActionsModule,
  NbSpinnerModule,
  NbContextMenuModule,
  NbMenuModule,
  NbListModule,
  NbCheckboxModule,
  NbToastrModule,
  NbTooltipModule,
  NbRouteTabsetModule,
  NbBadgeModule,
  NbProgressBarModule,
  NbSidebarModule,
  NbSelectModule,
  NbSearchModule,
  NbSidebarService,
  NbMenuService,
  NbDialogModule,
  NbAutocompleteModule,
  NbRadioModule,
  NbChatModule,
  NbDatepickerModule,
  NbTabsetModule,
  NbButtonGroupModule,
  NbAlertModule,
  NbThemeModule,
  NbLayoutModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { LoginComponent } from './login/login.component';
import { ContainerComponent } from './container/container.component';
import { MainComponent } from './container/main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { MuroPublicacionesComponent } from './container/muro-publicaciones/muro-publicaciones.component';
import { HeaderComponent } from './container/header/header.component';
import { CreatePublicComponent } from './container/create-public/create-public.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContainerComponent,
    MainComponent,
    MuroPublicacionesComponent,
    HeaderComponent,
    CreatePublicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbLayoutModule,
    NbEvaIconsModule,
    NbAlertModule,
    NbCardModule,
    NbTabsetModule,
    NbButtonModule,
    NbDatepickerModule,
    NbDatepickerModule.forRoot(),
    NbInputModule,
    NbAutocompleteModule,
    NbUserModule,
    NbIconModule,
    NbActionsModule,
    NbSpinnerModule,
    NbContextMenuModule,
    NbMenuModule.forRoot(),
    NbListModule,
    NbCheckboxModule,
    NbToastrModule.forRoot(),
    NbTooltipModule,
    NbRouteTabsetModule,
    NbBadgeModule,
    NbProgressBarModule,
    NbSidebarModule,
    NbSelectModule,
    NbSearchModule,
    NbRadioModule,
    NbChatModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN',
      headerName: 'CSRF-Token',
    }),
    //   Ng2SmartTableModule,
    NbDialogModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
