import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';


import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { OurAdvantagesComponent } from './features/HomePage/our-advantages/our-advantages.component';
import { HomeComponent } from './features/HomePage/Pages/home/home.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { OurAppComponent } from './features/HomePage/our-app/our-app.component';
import { AboutUsComponent } from './features/HomePage/about-us/about-us.component';
import { AppPagesComponent } from './features/HomePage/app-pages/app-pages.component';
import { ClientReviewComponent } from './features/HomePage/client-review/client-review.component';
import { HomeHeaderComponent } from './features/HomePage/home-header/home-header.component';
import { JoinusComponent } from './features/joinUsPage/joinus/joinus.component';
import { HeaderJoinUSComponent } from './features/joinUsPage/header-join-us/header-join-us.component';
import { PageJoinUSComponent } from './features/joinUsPage/page-join-us/page-join-us.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {DropdownModule} from 'primeng/dropdown';
import { PlacePickerModule } from 'ngx-place-picker';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OurAdvantagesComponent,
    HomeComponent,
    FooterComponent,
    OurAppComponent,
    AboutUsComponent,
    AppPagesComponent,
    ClientReviewComponent,
    HomeHeaderComponent,
    JoinusComponent,
    HeaderJoinUSComponent,
    PageJoinUSComponent
  ],
  imports: [
    PlacePickerModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DropdownModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    }),
    ToastrModule.forRoot({
      timeOut: 2000,
      preventDuplicates: true,
      positionClass: 'toast-bottom-right',
    }),
    BrowserAnimationsModule,
    MDBBootstrapModule,
    NgbModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
