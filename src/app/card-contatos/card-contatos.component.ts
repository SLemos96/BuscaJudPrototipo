import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-contatos',
  templateUrl: './card-contatos.component.html',
  styleUrls: ['./card-contatos.component.css']
})
export class CardContatosComponent implements OnInit {

  constructor() { }

  @Input() mensagem: string[] = [];

  ngOnInit(): void {
  }

}
