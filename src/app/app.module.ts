import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { LayoutComponent } from './layout/layout.component';
import { TooltipModule } from './ui-elements/tooltip/tooltip.module';
import { IconComponentComponent } from './footer/icon-component/icon-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LeftMenuComponent,
    DetailsPageComponent,
    LayoutComponent,
    IconComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


// app.module.ts

// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';

// // Import your components here
// import { HeaderComponent } from './header/header.component';
// import { FooterComponent } from './footer/footer.component';
// import { LeftMenuComponent } from './left-menu/left-menu.component';
// import { DetailsPageComponent } from './details-page/details-page.component';

// @NgModule({
//   declarations: [
//     // Include your components here
//     HeaderComponent,
//     FooterComponent,
//     LeftMenuComponent,
//     DetailsPageComponent
//   ],
//   imports: [BrowserModule],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
