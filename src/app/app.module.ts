import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { InfoarquitecturaComponent } from './componets/infoarquitectura/infoarquitectura.component';
import { VideoPorDronComponent } from './componets/video-por-dron/video-por-dron.component';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { CargarService } from './servicios/buscador/cargar.service';
import { GaleraiascriptService } from './servicios/galeria/galeraiascript.service';

import { ModalService } from './servicios/modal/modal.service';
import { ConstruccionComponent } from './componets/construccion/construccion.component';



const appRoutes: Routes = [
  {path:'', component:HomeMainComponent},
  {path:'nosotros', component:LoQueHacemosComponent},
  {path:'portafolio', component:PortafolioComponent },
  {path:'servicios', component:ServiciosComponent },
  {path:'contactos', component:ContactosComponent },
  {path:'marca', component:MarcaComponent},
  {path:'publicidadexterior', component:PublicidadExteriorComponent },
  {path:'impresos', component:ImpresosComponent },
  {path:'digitalweb', component:DigitalWebComponent},
  {path:'fotografia', component:FotografiaComponent  },
  {path:'animaciondigital', component:AnimacionDigitalComponent },
  {path:'infoarquitectura', component:InfoarquitecturaComponent },
  {path:'videopordron', component:VideoPorDronComponent },
  {path:'cc', component:ConstruccionComponent  },
  {path:'header', component:HeaderMainComponent  },


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
    AnimacionDigitalComponent,
    InfoarquitecturaComponent,
    VideoPorDronComponent,
    ConstruccionComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    AutocompleteLibModule
  ],
  providers: [
    CargarService,
    GaleraiascriptService,
    ModalService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
