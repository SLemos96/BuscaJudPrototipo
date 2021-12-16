import { Component, OnInit } from '@angular/core';
import { TelaBuscaService } from '../tela-busca/tela-busca.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  termoBusca: string = "";

  constructor(private telabuscaService: TelaBuscaService) { }

  ngOnInit(): void {
  }

  fazerAlgo(): void{
    console.log("teste");
  }

  realizarBusca(): void{
    //aqui vamos chamar o service para alimentar a variável com o conteúdo que está no input
    // console.log(this.termoBusca);
    this.telabuscaService.receberTermoBusca(this.termoBusca);
  }

}
