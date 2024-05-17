import { Routes } from '@angular/router';
import { canActivateGuard } from 'app/guard/can-activate.guard';

/*//components pages
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ServicosPrestadosComponent } from './pages/servicos-prestados/servicos-prestados.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';*/

//localhost:4200/
export const cursoRoutes: Routes = [

            {
                path: '',
                title: 'Home da página',
                loadComponent: () => import('./home/home.component'),
            },

            {
                path: 'sobre',
                title: 'Sobre da página',
                loadComponent: () => import('./sobre/sobre.component'),
                canActivate: [canActivateGuard],
            },

            {
                path: 'servicos/:id',
                title: 'Servicos da página',
                loadComponent: () => import('./servicos-prestados/servicos-prestados.component'),
            },
        ];

/*  
{
        path: '',
        children: [
            {
                path: '',
                title: 'Home da página',
                loadComponent: () =>
                    import('./home/home.component'),
            },

            {
                path: 'sobre',
                title: 'Sobre da página',
                loadComponent: () =>
                    import('./sobre/sobre.component'),
            },

            {
                path: 'servicos/:id',
                title: 'Servicos da página',
                loadComponent: () =>
                    import('./servicos-prestados/servicos-prestados.component'),
            },
        ],
},
*/

