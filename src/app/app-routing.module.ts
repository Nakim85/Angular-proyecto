import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';
import { MultimediaComponent } from './components/multimedia/multimedia.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { HorarioComponent } from './components/horario/horario.component';
import { FooterComponent } from './footer/footer.component';


const routes: Routes = [
  {path:'Header', component: HeaderComponent},
  {path:'Inicio', component: InicioComponent},
  {path:'Multimedia', component: MultimediaComponent},
  {path:'Horaio', component: HorarioComponent},
  {path:'Nosotros', component: NosotrosComponent},
  {path:'Contactanos', component: ContactanosComponent},
  {path:'footer',component:FooterComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
