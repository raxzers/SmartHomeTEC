import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-shop',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './shop.component.html',
    styleUrls: ['shop.component.scss'],
})
export class ShopComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
