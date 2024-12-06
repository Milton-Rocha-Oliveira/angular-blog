import { Route, RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './pages/home/home.component';
import { FilmesSeriesComponent } from './pages/filmes-series/filmes-series.component';
import { MensagensComponent } from './pages/mensagens/mensagens.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'filmes-series', component: FilmesSeriesComponent },
    { path: 'mensagens', component: MensagensComponent}

];
 

type NewType = ModuleWithProviders<Route>;

export const routing: NewType = RouterModule.forRoot(routes);