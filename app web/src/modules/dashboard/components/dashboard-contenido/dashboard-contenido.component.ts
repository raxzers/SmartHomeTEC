import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-dashboard-contenido',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dashboard-contenido.component.html',
    styleUrls: ['dashboard-contenido.component.scss'],
})
export class DashboardContenidoComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
