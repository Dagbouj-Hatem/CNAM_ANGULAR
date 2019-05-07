import { Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component'; 
import { IconsComponent }   from './icons/icons.component'; 
import { NotificationsComponent }   from './notifications/notifications.component';  
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
import { ControlMedicalDetailsComponent } from './controlMedicals/control-medical-details/control-medical-details.component';
import { ControlMedicalAddComponent } from './controlMedicals/control-medical-add/control-medical-add.component';
import { ControlMedicalIndexComponent } from './controlMedicals/control-medical-index/control-medical-index.component';
import { SaisiesDossiersIndexComponent } from './saisiedossier/saisies-dossiers-index/saisies-dossiers-index.component';
import { SaisiesDossiersDetailsComponent } from './saisiedossier/saisies-dossiers-details/saisies-dossiers-details.component';
import { SaisiesDossiersEditComponent } from './saisiedossier/saisies-dossiers-edit/saisies-dossiers-edit.component';
import { SaisiesDossiersAddComponent } from './saisiedossier/saisies-dossiers-add/saisies-dossiers-add.component';
import { ValidationIndexComponent } from './validations/validation-index/validation-index.component';
import { ValidationAddComponent } from './validations/validation-add/validation-add.component';
import { ValidationEditComponent } from './validations/validation-edit/validation-edit.component';
import { ValidationDetailsComponent } from './validations/validation-details/validation-details.component';
import { ParametrageIndexComponent } from './parametrages/parametrage-index/parametrage-index.component';
import { GestionautorisationDetailsComponent } from './Gestionautorisations/gestionautorisation-details/gestionautorisation-details.component';
import { GestionautorisationEditComponent } from './Gestionautorisations/gestionautorisation-edit/gestionautorisation-edit.component';
import { GestionautorisationAddComponent } from './Gestionautorisations/gestionautorisation-add/gestionautorisation-add.component';
import { GestionautorisationIndexComponent } from './Gestionautorisations/gestionautorisation-index/gestionautorisation-index.component';
import { ParametrageFormulaireIndexComponent } from './paramétrageFormulaires/parametrage-formulaire-index/parametrage-formulaire-index.component';
import { ParametrageFormulaireAddComponent } from './paramétrageFormulaires/parametrage-formulaire-add/parametrage-formulaire-add.component';
import { ParametrageFormulaireEditComponent } from './paramétrageFormulaires/parametrage-formulaire-edit/parametrage-formulaire-edit.component';
import { ParametrageFormulaireDetailsComponent } from './paramétrageFormulaires/parametrage-formulaire-details/parametrage-formulaire-details.component';
import { ParametrageConventionIndexComponent } from './ParamétrageConventions/parametrage-convention-index/parametrage-convention-index.component';
import { ParametrageConventionAddComponent } from './ParamétrageConventions/parametrage-convention-add/parametrage-convention-add.component';
import { ParametrageConventionEditComponent } from './ParamétrageConventions/parametrage-convention-edit/parametrage-convention-edit.component';
import { ParametrageConventionDetailsComponent } from './ParamétrageConventions/parametrage-convention-details/parametrage-convention-details.component';
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
import { AuthGaurdService } from 'services/auth-gaurd.service';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'login', 
        pathMatch: 'full'
    },
    {   path: 'login',
        component: LoginComponent
    },
    {
        path: 'dashboard',
        component: MainComponent,   
        children: [ 
        /*
        *   Home Menu 
        */
       
        {   path: 'home', 
            component: DashboardComponent,
            canActivate:[AuthGaurdService] 
        },
            
        /**
         * gestion des Assurés 
         * 
         */ 
        
        { // liste des Assurés
            path: 'assurés',
            component: GestionAssureIndexComponent,
            canActivate:[AuthGaurdService], 
        },
        { // add Assurés
            path: 'assurés/create',
            component: GestionAssureAddComponent,
            canActivate:[AuthGaurdService]
        },
        { // edit Assurés by id
            path: 'assurés/edit/:id',
            component: GestionAssureEditComponent,
            canActivate:[AuthGaurdService]
        },
        { // get single Assurés by id
            path: 'assurés/details/:id',
            component: GestionAssureDetailsComponent,
            canActivate:[AuthGaurdService]
        } ,

        /**
         * gestion des formulaires
         *  */ 

        
        { // liste des formulaires
            path: 'formulaires',
            component: GestionFormulaireIndexComponent,
            canActivate:[AuthGaurdService],  
        }, 
        { // add formulaires
            path: 'formulaires/create',
            component: GestionFormulaireAddComponent,
            canActivate:[AuthGaurdService]
        },
        { // edit formulaires by id
            path: 'formulaires/edit/:id',
            component: GestionFormulaireEditComponent,
            canActivate:[AuthGaurdService]
        },
        { // get single formulaires by id
            path: 'formulaires/details/:id',
            component: GestionFormulaireDetailsComponent,
            canActivate:[AuthGaurdService]
        },   



        {
            path: 'icons',
            component: IconsComponent,
            canActivate:[AuthGaurdService]
        }, 
        {
            path: 'notifications',
            component: NotificationsComponent,
            canActivate:[AuthGaurdService]
        }, 
        
        /**
         * etape administrative
         *  */ 

        
        { // liste etape
            path: 'administrative',
            component: EtapeAdministrativeIndexComponent,
            canActivate:[AuthGaurdService]
        },
        { // add formulaires
            path: 'administrative/create',
            component: EtapeAdministrativeAddComponent,
            canActivate:[AuthGaurdService]
        },
    

        /**
         * control medical
         *  */ 

        
        { // liste control
            path: 'medical',
            component: ControlMedicalIndexComponent,
            canActivate:[AuthGaurdService]
        },
        { // add formulaires
            path: 'medical/create',
            component: ControlMedicalAddComponent,
            canActivate:[AuthGaurdService]
        },
        { // get single formulaires by id
            path: 'medical/details/:id',
            component: ControlMedicalDetailsComponent,
            canActivate:[AuthGaurdService]
        },
            /**
         * saisir dos
         *  */ 

        
        { // liste saisir dos
            path: 'saisie',
            component: SaisiesDossiersIndexComponent,
            canActivate:[AuthGaurdService]
        },
        { // add formulaires
            path: 'saisie/create',
            component: SaisiesDossiersAddComponent,
            canActivate:[AuthGaurdService]
        },
        { // edit formulaires by id
            path: 'saisie/edit/:id',
            component: SaisiesDossiersEditComponent,
            canActivate:[AuthGaurdService]
        },
        { // get single formulaires by id
            path: 'saisie/details/:id',
            component:SaisiesDossiersDetailsComponent,
            canActivate:[AuthGaurdService]
        },

        /**
         * validation
         *  */ 

        
        { // liste validation
            path: 'validation',
            component: ValidationIndexComponent,
            canActivate:[AuthGaurdService]
        },
        { // add validation
            path: 'validation/create',
            component: ValidationAddComponent,
            canActivate:[AuthGaurdService]
        },
        { // edit validation by id
            path: 'validation/edit/:id',
            component: ValidationEditComponent,
            canActivate:[AuthGaurdService]
        },
        { // get single validation by id
            path: 'validation/details/:id',
            component:ValidationDetailsComponent,
            canActivate:[AuthGaurdService]
        },
        /**
         *parametrage
        *  */ 

        
        { // liste parametrage
            path: 'parametrage',
            component: ParametrageIndexComponent,
            canActivate:[AuthGaurdService]
        },
        /**
         * gestion autorisation
         *  */ 

        
        { // liste  gestion autorisation
            path: 'autorisation',
            component: GestionautorisationIndexComponent,
            canActivate:[AuthGaurdService]
        },
        { // add  gestion autorisation
            path: 'autorisation/create',
            component: GestionautorisationAddComponent,
            canActivate:[AuthGaurdService]
        },
        { // edit  gestion autorisationby id
            path: 'autorisation/edit/:id',
            component: GestionautorisationEditComponent,
            canActivate:[AuthGaurdService]
        },
        { // get single  gestion autorisationby id
            path: 'autorisation/details/:id',
            component:GestionautorisationDetailsComponent,
            canActivate:[AuthGaurdService]
        },
        /**
         * parametrage formulaire
         *  */ 

        
        { // liste parametrage formulaire
            path: 'Parametrage',
            component: ParametrageFormulaireIndexComponent,
            canActivate:[AuthGaurdService]
        },
        { // add  parametrage formulaire
            path: 'Parametrage/create',
            component: ParametrageFormulaireAddComponent,
            canActivate:[AuthGaurdService]
        },
        { // edit parametrage formulaire by id
            path: 'Parametrage/edit/:id',
            component: ParametrageFormulaireEditComponent,
            canActivate:[AuthGaurdService]
        },
        { // get single parametrage formulaire by id
            path: 'Parametrage/details/:id',
            component:ParametrageFormulaireDetailsComponent,
            canActivate:[AuthGaurdService]
        },
        /**
         * parametrage convantion
         *  */ 

        
        { // liste parametrage convantion
            path: 'convantion',
            component: ParametrageConventionIndexComponent,
            canActivate:[AuthGaurdService]
        },
        { // add  parametrage convantion
            path: 'convantion/create',
            component: ParametrageConventionAddComponent,
            canActivate:[AuthGaurdService]
        },
        { // edit parametrage convantion by id
            path: 'convantion/edit/:id',
            component: ParametrageConventionEditComponent,
            canActivate:[AuthGaurdService]
        },
        { // get single parametrage convantion by id
            path: 'convantion/details/:id',
            component:ParametrageConventionDetailsComponent,
            canActivate:[AuthGaurdService]
        },
        
        /**
         * comptabilité
         *  */ 

        
        { // liste parametrage convantion
            path: 'comptabilité',
            component: ComptabilitesIndexComponent,
            canActivate:[AuthGaurdService]
        },
        { // add  parametrage convantion
            path: 'comptabilitécreate',
            component: ComptabilitesAddComponent,
            canActivate:[AuthGaurdService]
        },
        { // edit parametrage convantion by id
            path: 'comptabilité/edit/:id',
            component: ComptabilitesEditComponent,
            canActivate:[AuthGaurdService]
        },
        { // get single parametrage convantion by id
            path: 'comptabilité/details/:id',
            component:ComptabilitesDetailleComponent,
            canActivate:[AuthGaurdService]
        },
        
        /**
         *spécifier les montants
        *  */ 

        
        { // liste spécifier les montants
            path: 'spécifier les montants',
            component: SpecifierlesmontantsIndexComponent,
            canActivate:[AuthGaurdService]
        },
        { // add  parametrage convantion
            path: 'spécifier les montants/create',
            component:SpecifierlesmontantsAddComponent,
            canActivate:[AuthGaurdService]
        },
        /**
         *consulter avis medical valide
        *  */ 

        
        { // listeconsulter avis medical valide
            path: 'consulter avis medical valide',
            component: ConsulterAvisMedicalValideIndexComponent,
            canActivate:[AuthGaurdService]
        },
        { // add  consulter avis medical valide
            path: 'consulter avis medical valide/create',
            component:ConsulterAvisMedicalValideAddComponent,
            canActivate:[AuthGaurdService]
        },
    ]} ,
    // Error root
    {
        path:'**',
        component: ErrorComponent
    }
]

