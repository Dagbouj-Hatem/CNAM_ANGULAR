import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';
import { NguiMapModule} from '@ngui/map';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { UserComponent }   from './user/user.component';
import { TableComponent }   from './table/table.component';
import { TypographyComponent }   from './typography/typography.component';
import { IconsComponent }   from './icons/icons.component';
import { MapsComponent }   from './maps/maps.component';
import { NotificationsComponent }   from './notifications/notifications.component';
import { UpgradeComponent }   from './upgrade/upgrade.component';
import { UserAddComponent } from './users/user-add/user-add.component';
import { UserGetComponent } from './users/user-get/user-get.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UserIndexComponent } from './users/user-index/user-index.component';
import { GestionAssureIndexComponent } from './gestionAssures/gestion-assure-index/gestion-assure-index.component';
import { GestionAssureAddComponent } from './gestionAssures/gestion-assure-add/gestion-assure-add.component';
import { GestionAssureEditComponent } from './gestionAssures/gestion-assure-edit/gestion-assure-edit.component';
import { GestionAssureDetailsComponent } from './gestionAssures/gestion-assure-details/gestion-assure-details.component';
import { GestionFormulaireIndexComponent } from './gestionFormulaire/gestion-formulaire-index/gestion-formulaire-index.component';
import { GestionFormulaireAddComponent } from './gestionFormulaire/gestion-formulaire-add/gestion-formulaire-add.component';
import { GestionFormulaireEditComponent } from './gestionFormulaire/gestion-formulaire-edit/gestion-formulaire-edit.component';
import { GestionFormulaireDetailsComponent } from './gestionFormulaire/gestion-formulaire-details/gestion-formulaire-details.component';
import { EtapeAdministrativeIndexComponent } from './etapeAdministratives/etape-administrative-index/etape-administrative-index.component';
import { EtapeAdministrativeAddComponent } from './etapeAdministratives/etape-administrative-add/etape-administrative-add.component';
import { ControlMedicalIndexComponent } from './controlMedicals/control-medical-index/control-medical-index.component';
import { ControlMedicalAddComponent } from './controlMedicals/control-medical-add/control-medical-add.component';
import { ControlMedicalDetailsComponent } from './controlMedicals/control-medical-details/control-medical-details.component';
import { SaisiesDossiersIndexComponent } from './saisiedossier/saisies-dossiers-index/saisies-dossiers-index.component';
import { SaisiesDossiersEditComponent } from './saisiedossier/saisies-dossiers-edit/saisies-dossiers-edit.component';
import { SaisiesDossiersAddComponent } from './saisiedossier/saisies-dossiers-add/saisies-dossiers-add.component';
import { SaisiesDossiersDetailsComponent } from './saisiedossier/saisies-dossiers-details/saisies-dossiers-details.component';
import { ValidationIndexComponent } from './validations/validation-index/validation-index.component';
import { ValidationAddComponent } from './validations/validation-add/validation-add.component';
import { ValidationEditComponent } from './validations/validation-edit/validation-edit.component';
import { ValidationDetailsComponent } from './validations/validation-details/validation-details.component';
import { ParametrageIndexComponent } from './parametrages/parametrage-index/parametrage-index.component';
import { GestionautorisationIndexComponent } from './Gestionautorisations/gestionautorisation-index/gestionautorisation-index.component';
import { GestionautorisationAddComponent } from './Gestionautorisations/gestionautorisation-add/gestionautorisation-add.component';
import { GestionautorisationEditComponent } from './Gestionautorisations/gestionautorisation-edit/gestionautorisation-edit.component';
import { GestionautorisationDetailsComponent } from './Gestionautorisations/gestionautorisation-details/gestionautorisation-details.component';
import { ParametrageFormulaireIndexComponent } from './paramétrageFormulaires/parametrage-formulaire-index/parametrage-formulaire-index.component';
import { ParametrageFormulaireAddComponent } from './paramétrageFormulaires/parametrage-formulaire-add/parametrage-formulaire-add.component';
import { ParametrageFormulaireEditComponent } from './paramétrageFormulaires/parametrage-formulaire-edit/parametrage-formulaire-edit.component';
import { ParametrageFormulaireDetailsComponent } from './paramétrageFormulaires/parametrage-formulaire-details/parametrage-formulaire-details.component';
import { ParametrageConventionIndexComponent } from './ParamétrageConventions/parametrage-convention-index/parametrage-convention-index.component';
import { ParametrageConventionAddComponent } from './ParamétrageConventions/parametrage-convention-add/parametrage-convention-add.component';
import { ParametrageConventionEditComponent } from './ParamétrageConventions/parametrage-convention-edit/parametrage-convention-edit.component';
import { ParametrageConventionDetailsComponent } from './ParamétrageConventions/parametrage-convention-details/parametrage-convention-details.component';
import { DataTablesModule } from 'angular-datatables';
import { ComptabilitesIndexComponent } from './comptabilité/comptabilites-index/comptabilites-index.component';
import { ComptabilitesAddComponent } from './comptabilité/comptabilites-add/comptabilites-add.component';
import { ComptabilitesEditComponent } from './comptabilité/comptabilites-edit/comptabilites-edit.component';
import { ComptabilitesDetailleComponent } from './comptabilité/comptabilites-detaille/comptabilites-detaille.component';
import { SpecifierlesmontantsIndexComponent } from './spécifierlesmontants/specifierlesmontants-index/specifierlesmontants-index.component';
import { SpecifierlesmontantsAddComponent } from './spécifierlesmontants/specifierlesmontants-add/specifierlesmontants-add.component';
import { ConsulterAvisMedicalValideIndexComponent } from './ConsulterAvisMedicalValide/consulter-avis-medical-valide-index/consulter-avis-medical-valide-index.component';
import { ConsulterAvisMedicalValideAddComponent } from './ConsulterAvisMedicalValide/consulter-avis-medical-valide-add/consulter-avis-medical-valide-add.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { ErrorComponent } from './error/error.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserComponent,
    TableComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    UserAddComponent,
    UserGetComponent,
    UserEditComponent,
    UserIndexComponent,
    GestionAssureIndexComponent,
    GestionAssureAddComponent,
    GestionAssureEditComponent,
    GestionAssureDetailsComponent,
    GestionFormulaireIndexComponent,
    GestionFormulaireAddComponent,
    GestionFormulaireEditComponent,
    GestionFormulaireDetailsComponent,
    EtapeAdministrativeIndexComponent,
    EtapeAdministrativeAddComponent,
    ControlMedicalIndexComponent,
    ControlMedicalAddComponent,
    ControlMedicalDetailsComponent,
    SaisiesDossiersIndexComponent,
    SaisiesDossiersEditComponent,
    SaisiesDossiersAddComponent,
    SaisiesDossiersDetailsComponent,
    ValidationIndexComponent,
    ValidationAddComponent,
    ValidationEditComponent,
    ValidationDetailsComponent,
    ParametrageIndexComponent,
    GestionautorisationIndexComponent,
    GestionautorisationAddComponent,
    GestionautorisationEditComponent,
    GestionautorisationDetailsComponent,
    ParametrageFormulaireIndexComponent,
    ParametrageFormulaireAddComponent,
    ParametrageFormulaireEditComponent,
    ParametrageFormulaireDetailsComponent,
    ParametrageConventionIndexComponent,
    ParametrageConventionAddComponent,
    ParametrageConventionEditComponent,
    ParametrageConventionDetailsComponent,
    ComptabilitesIndexComponent,
    ComptabilitesAddComponent,
    ComptabilitesEditComponent,
    ComptabilitesDetailleComponent,
    SpecifierlesmontantsIndexComponent,
    SpecifierlesmontantsAddComponent,
    ConsulterAvisMedicalValideIndexComponent,
    ConsulterAvisMedicalValideAddComponent,
    LoginComponent,
    MainComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    SidebarModule,
    NavbarModule,
    FooterModule,
    FixedPluginModule, 
    DataTablesModule,
     // add form reactive 
     FormsModule,
     ReactiveFormsModule,
     // end form reactive
 
     // import  http client 
     HttpClientModule,
     // end import  http client 
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE'})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
