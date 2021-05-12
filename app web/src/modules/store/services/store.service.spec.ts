import { TestBed } from '@angular/core/testing';

import { StoreService } from './store.service';

describe('StoreService', () => {
    let storeService: StoreService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [StoreService],
        });
        storeService = TestBed.inject(StoreService);
    });

    describe('getStore$', () => {
        it('should return Observable<Store>', () => {
            expect(storeService).toBeDefined();
        });
    });
});
