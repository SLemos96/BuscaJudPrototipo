import { Component, OnInit } from '@angular/core';
import { TelaBuscaService } from './tela-busca.service';

@Component({
  selector: 'app-tela-busca',
  templateUrl: './tela-busca.component.html',
  styleUrls: ['./tela-busca.component.css']
})
export class TelaBuscaComponent implements OnInit {

  textoBusca = "testando"

  constructor(private telabuscaService: TelaBuscaService) { }


  ngOnInit(): void {
    //preenchendo a barra de busca com a mensagem inserida pelo usuário na tela home
    this.textoBusca = this.telabuscaService.getMsgBusca();
    // console.log(this.textoBusca);
  }

}
