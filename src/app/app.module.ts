import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaBuscaComponent } from './tela-busca/tela-busca.component';
import { BuscaProcessoComponentComponent } from './busca-processo-component/busca-processo-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { CardContatosComponent } from './card-contatos/card-contatos.component';
import { CardNoticiasComponent } from './card-noticias/card-noticias.component';

@NgModule({
  declarations: [
    AppComponent,
    TelaBuscaComponent,
    BuscaProcessoComponentComponent,
    HomeComponentComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    CardContatosComponent,
    CardNoticiasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
