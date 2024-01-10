import { Routes } from '@angular/router';
import { HomeComponent } from './infra/controller/navegacao/home/home.component';
import { SobreComponent } from './infra/controller/institucional/sobre/sobre.component';
import { ContatoComponent } from './infra/controller/institucional/contato/contato.component';
import { CadastroComponent } from './infra/controller/demos/reactiveForms/cadastro/cadastro.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'sobre',
    component: SobreComponent,
  },
  {
    path: 'contato',
    component: ContatoComponent,
  },
  {
    path: 'cadastro',
    component: CadastroComponent,
  },
];
