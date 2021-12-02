import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginComponent } from './pages/login/login.component';
import { DettaglioCameriereComponent } from './pages/dettaglio-cameriere/dettaglio-cameriere.component';
import { DettaglioBaristaComponent } from './pages/dettaglio-barista/dettaglio-barista.component';
import { DettaglioCuocoComponent } from './pages/dettaglio-cuoco/dettaglio-cuoco.component';
import { DettaglioAdminComponent } from './pages/dettaglio-admin/dettaglio-admin.component';
import { TableComponent } from './shared/table/table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular.material.module';
import { DialogComponent } from './shared/dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    DettaglioCameriereComponent,
    DettaglioBaristaComponent,
    DettaglioCuocoComponent,
    DettaglioAdminComponent,
    TableComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularMaterialModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent]
})
export class AppModule { }
