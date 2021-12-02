import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginComponent } from './pages/login/login.component';
import { SpinnerCircularModule } from 'spinners-angular/spinner-circular';
import { DettaglioCameriereComponent } from './pages/dettaglio-cameriere/dettaglio-cameriere.component';
import { DettaglioBaristaComponent } from './pages/dettaglio-barista/dettaglio-barista.component';
import { DettaglioCuocoComponent } from './pages/dettaglio-cuoco/dettaglio-cuoco.component';
import { DettaglioAdminComponent } from './pages/dettaglio-admin/dettaglio-admin.component';
import { TableComponent } from './pages/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    DettaglioCameriereComponent,
    DettaglioBaristaComponent,
    DettaglioCuocoComponent,
    DettaglioAdminComponent
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SpinnerCircularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
