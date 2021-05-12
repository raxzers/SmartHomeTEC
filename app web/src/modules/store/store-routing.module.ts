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
        pathMatch: 'full',
        redirectTo: '/store/shop',
    },
     {
        path: 'fct',
        canActivate: [],
        component: storeContainers.FacturaComponent,
        data: {
            title: 'Factura',
        }
    },
    {
        path: 'shop',
        canActivate: [],
        component: storeContainers.ShopComponent,
        data: {
            title: 'Tienda de Smart Home TEC',
        }
    },


];

@NgModule({
    imports: [StoreModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class StoreRoutingModule {}
