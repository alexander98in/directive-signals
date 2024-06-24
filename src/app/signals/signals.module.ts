import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { CounterPageComponent } from './pages/counter-page/counter-page.component';
import { UserInfoPageComponent } from './pages/user-info-page/user-info-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { SignalsLayoutComponent } from './layout/signals-layout/signals-layout.component';
import { RouterModule } from '@angular/router';
import { SignalsRoutingModule } from './signals-routing.module';



@NgModule({
  declarations: [
    SideMenuComponent,
    CounterPageComponent,
    UserInfoPageComponent,
    PropertiesPageComponent,
    SignalsLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SignalsRoutingModule
  ]
})
export class SignalsModule { }
