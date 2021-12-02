import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginComponent } from './pages/login/login.component';
import { DettaglioAdminComponent } from './pages/dettaglio-admin/dettaglio-admin.component';
import { DettaglioCameriereComponent } from './pages/dettaglio-cameriere/dettaglio-cameriere.component';
import { DettaglioCuocoComponent } from './pages/dettaglio-cuoco/dettaglio-cuoco.component';
import { DettaglioBaristaComponent } from './pages/dettaglio-barista/dettaglio-barista.component';
import { CameriereResolver } from './resolver/cameriere.resolver';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'private', component: HomepageComponent },
  { path: 'dettaglioCameriere/:id', component: DettaglioCameriereComponent, resolve: { tavolo: CameriereResolver } },
  { path: 'dettaglioCuoco/:id', component: DettaglioCuocoComponent },
  { path: 'dettaglioBarista/:id', component: DettaglioBaristaComponent },
  { path: 'dettaglioAdmin/:id', component: DettaglioAdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
