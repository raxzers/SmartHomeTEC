import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class StoreService {
    constructor() {}

    getStore$(): Observable<{}> {
        return of({});
    }

}
