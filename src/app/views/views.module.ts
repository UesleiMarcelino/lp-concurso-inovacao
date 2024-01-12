import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DesafiosComponent } from './components/desafios/desafios.component';
import { CronogramaComponent } from './components/cronograma/cronograma.component';
import { PremiacaoComponent } from './components/premiacao/premiacao.component';
import { InscricaoComponent } from './components/inscricao/inscricao.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { SharedModule } from '../shared/shared.module';
import { ViewsRoutingModule } from './view-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    HomeComponent,
    InicioComponent,
    DesafiosComponent,
    CronogramaComponent,
    PremiacaoComponent,
    InscricaoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ViewsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HomeComponent,
    DesafiosComponent,
    CronogramaComponent,
    PremiacaoComponent,
    InscricaoComponent
  ]
})
export class ViewsModule { }
