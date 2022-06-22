import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UserAdminComponent } from './components/user-admin/user-admin.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ImageAdminComponent } from './components/image-admin/image-admin.component';
import { NotPageFoundComponent } from './components/not-page-found/not-page-found.component';

@NgModule({
  declarations: [
    AppComponent,
    UserAdminComponent,
    UserCardComponent,
    NavbarComponent,
    ImageAdminComponent,
    NotPageFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
