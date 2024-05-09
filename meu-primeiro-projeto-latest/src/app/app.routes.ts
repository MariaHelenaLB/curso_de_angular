import { Routes } from '@angular/router';

/*//components pages
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ServicosPrestadosComponent } from './pages/servicos-prestados/servicos-prestados.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';*/

//localhost:4200/
export const routes: Routes = [
    {
        path: 'curso',
        loadChildren: () => 
            import('./pages/curso.routes').then((r) => r.cursoRoutes),
    },

    /* 
    {
         path: 'dashboard',
         children: [
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
                 path: 'servicos/:id',
                 title: 'Servicos da página',
                 component: ServicosPrestadosComponent,
             },
         ],
     },
     */

    {
        path: '**',
        loadComponent: () => import('./pages/not-found/not-found.component'),
    },
];
