import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-noticias',
  templateUrl: './card-noticias.component.html',
  styleUrls: ['./card-noticias.component.css']
})
export class CardNoticiasComponent implements OnInit {

  constructor() { }

  @Input() mensagem: string[] = [];

  ngOnInit(): void {
  }

}
