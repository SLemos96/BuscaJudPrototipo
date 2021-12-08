import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { TelaBuscaComponent } from './tela-busca/tela-busca.component';
import { BuscaProcessoComponentComponent } from './busca-processo-component/busca-processo-component.component';

const routes: Routes = [{
  path: "",
  component: HomeComponentComponent
},{
  path: "result",
  component: TelaBuscaComponent
},
{
  path: "buscaprocesso",
  component: BuscaProcessoComponentComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
