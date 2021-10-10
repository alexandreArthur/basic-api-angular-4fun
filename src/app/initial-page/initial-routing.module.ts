import { Routes } from "@angular/router";

import { InitialPageComponent } from "./initial-page.component";

export const initialPageRoutes: Routes=[
    {
        path: 'home',
        redirectTo: 'home/init'
    },
    {
        path: 'home/init',
        component: InitialPageComponent
    }
   
];