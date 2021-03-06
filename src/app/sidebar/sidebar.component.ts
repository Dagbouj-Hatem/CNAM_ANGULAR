import { Component, OnInit } from '@angular/core';

declare var $: any;

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: 'home', title: 'Dashboard', icon: 'ti-panel', class: '' },
    { path: 'assurés', title: 'Gestion des assurés', icon: 'ti-list', class: '' },
    { path: 'formulaires', title: 'Formulaires', icon: 'ti-layout', class: '' },
    { path: 'administrative', title: 'Etape Administrative', icon: 'ti-layers-alt', class: '' },
    { path: 'medical', title: 'Avis Medical', icon: 'ti-support', class: '' },
    { path: 'validation', title: 'Contrôle ', icon: 'ti-check-box', class: '' },
    { path: 'comptabilité', title: 'Comptabilité ', icon: 'ti-money', class: '' },
    { path: 'parametrage', title: 'Paramétrages ', icon: 'ti-settings', class: '' },
    
    //{ path: 'icons', title: 'Icons', icon: 'ti-pencil-alt2', class: '' },
    //{ path: 'notifications', title: 'Notifications',  icon:'ti-bell', class: '' },
];
@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    isNotMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    }

}
