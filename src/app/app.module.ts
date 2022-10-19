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
import { MarcaComponent } from './componets/marca/marca.component';
import { PublicidadExteriorComponent } from './componets/publicidad-exterior/publicidad-exterior.component';
import { ImpresosComponent } from './componets/impresos/impresos.component';
import { DigitalWebComponent } from './componets/digital-web/digital-web.component';
import { FotografiaComponent } from './componets/fotografia/fotografia.component';
import { AnimacionDigitalComponent } from './componets/animacion-digital/animacion-digital.component';

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
    ContactosComponent,
    MarcaComponent,
    PublicidadExteriorComponent,
    ImpresosComponent,
    DigitalWebComponent,
    FotografiaComponent,
    AnimacionDigitalComponent
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
