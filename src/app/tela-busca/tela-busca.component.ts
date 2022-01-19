import { Component, OnInit } from '@angular/core';
import { TelaBuscaService } from './tela-busca.service';

@Component({
  selector: 'app-tela-busca',
  templateUrl: './tela-busca.component.html',
  styleUrls: ['./tela-busca.component.css']
})
export class TelaBuscaComponent implements OnInit {

  textoBusca = "testando"

  mensagem = "blablabla"

  //processos criados para preenchimento da informação visual. Apagar depois
  //essa informação tá sendo enviada no tela-busca.component para o card.component. Linhas: 63 66 76 e 79.
  //ideal é que no próximo passo seja feito com *ngFor
  processo1: string[] = ['0800138-29.2015.4.05.8504', 'Juntada de Embargos de Declaração', 'DIREITO ADMINISTRATIVO E OUTRAS MATÉRIAS DE DIREITO PÚBLICO|Atos Administrativos|Improbidade Administrativa|Enriquecimento ilícito|'];
  processo2: string[] = ['2000021-22.2019.4.05.8302', 'Conclusos para julgamento', 'DIREITO DO CONSUMIDOR|Contratos de Consumo|Seguro|'];
  processo3: string[] = ['2000015-15.2019.4.05.8302', 'Conclusos para decisão', 'DIREITO ADMINISTRATIVO E OUTRAS MATÉRIAS DE DIREITO PÚBLICO|Atos Administrativos|Improbidade Administrativa|Enriquecimento ilícito|'];
  processo4: string[] = ['2000006-53.2019.4.05.8302', 'Baixa Definitiva', 'DIREITO ADMINISTRATIVO E OUTRAS MATÉRIAS DE DIREITO PÚBLICO|Domínio Público|Imóvel Funcional|Reintegração de Posse|'];

  contato1: string[] = ['6ª Vara - Natal', 'Marco Bruno Clementino Miranda', '(84)99999-9999 | marcomiranda@jfrn.br', 'Juiz Federal Titular da 6ª Vara ', 'Integrante do Centro de Inteligencia do Poder Judiciário'];
  contato2: string[] = ['2ª Vara - Aracaju', 'Ronivon de Aragão', '(84)99999-9999 | ', 'Juiz Federal Titular da 2ª Vara ', ' '];

  constructor(private telabuscaService: TelaBuscaService) { }


  ngOnInit(): void {
    //preenchendo a barra de busca com a mensagem inserida pelo usuário na tela home
    this.textoBusca = this.telabuscaService.getMsgBusca();
    // console.log(this.textoBusca);
  }

}
