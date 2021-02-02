import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MagasinsComponent } from './magasins/magasins.component';
import { MagaComponent } from './maga/maga.component';
import { HorizonComponent } from './horizon/horizon.component';
import { AppStoreComponent } from './app-store/app-store.component';
import { FooterComponent } from './footer/footer.component';
import { FaridComponent } from './farid/farid.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderrComponent } from './headerr/headerr.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductComponent,
    AboutUsComponent,
    OurTeamComponent,
    ContactUsComponent,
    MagasinsComponent,
    MagaComponent,
    HorizonComponent,
    AppStoreComponent,
    FooterComponent,
    FaridComponent,
    WelcomeComponent,
    HeaderrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
