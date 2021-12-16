import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  
  constructor() { }

  //variável sendo recebida do pai tela-busca.component
  //cada mensagem recebida é um processo com sua documentação
  //no próximo passo isso vai se tornar um model, e deixará de ser um array de string.
  @Input() mensagem: string[] = [];
  
  ngOnInit(): void {
  }

}
