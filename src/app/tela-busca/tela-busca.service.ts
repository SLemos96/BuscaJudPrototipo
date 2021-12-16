import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TelaBuscaService {
  
  // variável que armazena o termo que o usuário digita na barra de pesquisa
  msgBusca = "";

  constructor() { }

  receberTermoBusca(msg: string): void{
    this.msgBusca = msg; //atribuindo a variável local o valor da barra em HomeComponent
    // console.log('im here, '+ this.msgBusca);
    // console.log("to chegando no receberTermoBusca");
  }

  getMsgBusca(){
    return this.msgBusca;
  }
}
