import { Routes } from '@angular/router';

//components
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ServicosPrestadosComponent } from './pages/servicos-prestados/servicos-prestados.component';

//localhost:4200/
export const routes: Routes = [
    {
        path: '',
        title: 'Home da página',
        component: HomeComponent,
    },

    {
        path: 'sobre',
        title: 'Sobre da página',
        component: SobreComponent,
    },

    {
        path: 'sevicos',
        title: 'Servicos da página',
        component: ServicosPrestadosComponent,
    },
];
