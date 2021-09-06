import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { MpandrayComponent } from './components/mpandray/mpandray.component';
import { AdidyComponent } from './components/adidy/adidy.component';
import { DistrictComponent } from './components/district/district.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './auth.guard';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MycurrencyPipe } from './pipes/mycurrency.pipe';
import { MydatePipe } from './pipes/mydate.pipe';
import { Mydate2Pipe } from './pipes/mydate2.pipe';

const appRoutes: Routes = [
  {path: 'logout', component: LogoutComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  // {path: 'dashboard', component: DashboardComponent},
  {path: 'dashboard/mpampiasa', component: UserComponent, canActivate: [AuthGuard]},
  // {path: 'dashboard/mpampiasa', component: UserComponent},
  {path: 'dashboard/mpandray', component: MpandrayComponent, canActivate: [AuthGuard]},
  // {path: 'dashboard/mpandray', component: MpandrayComponent},
  {path: 'dashboard/adidy', component: AdidyComponent, canActivate: [AuthGuard]},
  // {path: 'dashboard/adidy', component: AdidyComponent},
  {path: 'dashboard/kartie', component: DistrictComponent, canActivate: [AuthGuard]},
  // {path: 'dashboard/kartie', component: DistrictComponent},
  {path: '', redirectTo: 'register', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    MpandrayComponent,
    AdidyComponent,
    DistrictComponent,
    DashboardComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    NavbarComponent,
    SidebarComponent,
    MycurrencyPipe,
    MydatePipe,
    Mydate2Pipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),
    HttpClientModule,
    FormsModule,
    ChartsModule,
    FontAwesomeModule
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
