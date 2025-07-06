import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';

import { OffersComponent } from './components/offers/offers.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { WorkComponent } from './components/work/work.component';
import { EndPartComponent } from './components/end-part/end-part.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponentComponent,
    AboutComponent,
    ProjectsComponent,
    OffersComponent,
    TestimonialsComponent,
    WorkComponent,
    EndPartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
