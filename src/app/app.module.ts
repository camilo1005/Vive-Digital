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
import { PortafolioComponent } from './componets/portafolio/portafolio.component';
import { ServiciosComponent } from './componets/servicios/servicios.component';
import { ContactosComponent } from './componets/contactos/contactos.component';

const appRoutes: Routes = [
  {path:'holi', component:HeaderMainComponent},
  {path:'inicio', component:HomeMainComponent},
  {path:'nosotros', component:LoQueHacemosComponent},
  {path:'portafolio', component:PortafolioComponent },
  {path:'servicios', component:ServiciosComponent },
  {path:'contactos', component:ContactosComponent },
]
@NgModule({
  declarations: [
    AppComponent,
    HomeMainComponent,
    HeaderMainComponent,
    LoQueHacemosComponent,
    PortafolioComponent,
    ServiciosComponent,
    ContactosComponent
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
