import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeMainComponent } from './componets/home-main/home-main.component';
import { HeaderMainComponent } from './componets/header-main/header-main.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoQueHacemosComponent } from './componets/lo-que-hacemos/lo-que-hacemos.component';

const appRoutes: Routes = [
  {path:'holi', component:HeaderMainComponent},
  {path:'hola', component:HomeMainComponent},
  {path:'hola2', component:LoQueHacemosComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    HomeMainComponent,
    HeaderMainComponent,
    LoQueHacemosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
