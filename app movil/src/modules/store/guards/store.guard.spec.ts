import { TestBed } from '@angular/core/testing';

import { StoreGuard } from './store.guard';

describe('Store Guards', () => {
    let storeGuard: StoreGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [StoreGuard],
        });
        storeGuard = TestBed.inject(StoreGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            storeGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
