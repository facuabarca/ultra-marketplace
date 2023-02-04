/* eslint-disable @typescript-eslint/no-explicit-any */
import { inject, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { UserState } from '../store/user.state';
import {
  getUser,
  updateUserProductsPurchased,
  updateUserWallet,
} from '../store/user.actions';
import { UserFacadeService } from './user-facade.service';

const initialState = {
  wallet: {
    amount: 0,
  },
  productsPurchased: [],
};

describe('testing user effects', () => {
  let service: UserFacadeService;
  let store: MockStore<UserState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserFacadeService, provideMockStore({ initialState })],
    });
    store = TestBed.inject(MockStore);
    store.setState(initialState);
  });
  beforeEach(inject([UserFacadeService], (_service: UserFacadeService) => {
    service = _service;
  }));

  it('loadUser function should dispath getUser action', () => {
    const expectedAction = getUser();
    const dispatchSpy = jest.spyOn(store, 'dispatch');
    service.loadUser();
    expect(dispatchSpy).toHaveBeenCalledWith(expectedAction);
  });

  it('updateWallet function should dispath updateUserWallet action', () => {
    const amount = 50;
    const expectedAction = updateUserWallet({ amount });
    const dispatchSpy = jest.spyOn(store, 'dispatch');
    service.updateWallet(amount);
    expect(dispatchSpy).toHaveBeenCalledWith(expectedAction);
  });

  it('updateProductsPurchased function should dispath updateUserProductsPurchased action', () => {
    const productsPurchased = [45345, 33];
    const expectedAction = updateUserProductsPurchased({ productsPurchased });
    const dispatchSpy = jest.spyOn(store, 'dispatch');
    service.updateProductsPurchased(productsPurchased);
    expect(dispatchSpy).toHaveBeenCalledWith(expectedAction);
  });
});
