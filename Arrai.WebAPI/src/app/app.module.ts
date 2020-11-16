import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavComponent} from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { BannerRotativoComponent } from './banner-rotativo/banner-rotativo.component';
import { TitleTextComponent } from './title-text/title-text.component';
import { BannerHoverComponent } from './banner-hover/banner-hover.component';
import { BannerComponent } from './banner/banner.component';
import { Banner2HoverComponent } from './banner2-hover/banner2-hover.component';
import { CarouselComponent } from './carousel/carousel.component';



@NgModule({
  declarations: [								
    AppComponent,
    NavComponent,
    FooterComponent,
    BannerRotativoComponent,
    TitleTextComponent,
      BannerHoverComponent,
      BannerComponent,
      Banner2HoverComponent,
      CarouselComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
