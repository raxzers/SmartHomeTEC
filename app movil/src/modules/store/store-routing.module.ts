/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { StoreModule } from './store.module';

/* Containers */
import * as storeContainers from './containers';

/* Guards */
import * as storeGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    
     {
         path: '',
         canActivate: [],
         component: storeContainers.ShopComponent,
     },
     {
        path: 'fct',
        canActivate: [],
        component: storeContainers.FacturaComponent,
    },
    {
        path: 'shop',
        canActivate: [],
        component: storeContainers.ShopComponent,
    },


];

@NgModule({
    imports: [StoreModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class StoreRoutingModule {}
