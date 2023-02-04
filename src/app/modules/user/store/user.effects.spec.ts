import { Observable } from 'rxjs';
import { UserDataService } from '../services/user-data.service';
import { TestBed } from '@angular/core/testing';
import { UserEffects } from './user.effects';
import { UserState } from './user.state';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { TestScheduler } from 'rxjs/testing';
import { getUser, getUserSuccess } from './user.actions';

const initialState = {
  wallet: {
    amount: 0,
  },
  productsPurchased: [],
};

const mockUserDataService = {
  getUser: jest.fn(),
};

describe('testing user effects', () => {
  let effect: UserEffects;
  let actions: Observable<any>;
  let store: MockStore<UserState>;
  let testScheduler: TestScheduler;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserEffects,
        provideMockStore({ initialState }),
        provideMockActions(() => actions),
        { provide: UserDataService, useValue: mockUserDataService },
      ],
    });

    effect = TestBed.inject(UserEffects);
    store = TestBed.inject(MockStore);
    store.setState(initialState);

    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should handle getUser action and return getUserSuccess action', () => {
    const user = {
      wallet: {
        amount: 200,
      },
      productsPurchased: [],
    };
    const action = getUser();
    const outcome = getUserSuccess({ user });

    testScheduler.run(({ hot, cold, expectObservable }) => {
      actions = hot('-a', { a: action });
      const response = cold('-b', { b: user });
      mockUserDataService.getUser.mockReturnValue(response);
      expectObservable(effect.getUser$).toBe('--b', { b: outcome });
    });
  });
});
