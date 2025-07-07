import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { AboutUsComponent } from './about-us/about-us.component';
// import { MatMenuModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SecondPageComponent,
    // AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
