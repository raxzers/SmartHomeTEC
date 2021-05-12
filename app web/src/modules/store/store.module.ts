/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/* Modules */
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';

/* Components */
import * as storeComponents from './components';

/* Containers */
import * as storeContainers from './containers';

/* Guards */
import * as storeGuards from './guards';

/* Services */
import * as storeServices from './services';
import {ShopComponent} from './containers/shop/shop.component'
@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        AppCommonModule,
        NavigationModule,
    ],
    providers: [...storeServices.services, ...storeGuards.guards],
    declarations: [...storeContainers.containers, ...storeComponents.components,ShopComponent],
    exports: [...storeContainers.containers, ...storeComponents.components],
})
export class StoreModule {}
