import {
  getUserSuccess,
  updateUserWallet,
  updateUserProductsPurchased,
} from './user.actions';
import { userReducers } from './user.reducer';
import { userState } from './user.state';

describe('testing user reducer', () => {
  it('should return the default state', () => {
    const initialState = userState;
    const action = {
      type: 'unknow',
    };
    const state = userReducers(initialState, action);

    expect(state).toBe(initialState);
  });

  it('should update the state in a inmutable way', () => {
    const initialState = userState;
    const newState = {
      wallet: {
        amount: 200,
      },
      productsPurchased: [45435, 2322, 32222, 1114],
    };
    const action = getUserSuccess({ user: newState });

    const state = userReducers(initialState, action);

    expect(state).toEqual(newState);
    expect(state).not.toBe(newState);
  });

  it('should update the wallet in a inmutable way', () => {
    const initialState = {
      wallet: {
        amount: 200,
      },
      productsPurchased: [1221],
    };

    const action = updateUserWallet({ amount: 50 });
    const state = userReducers(initialState, action);

    expect(state.wallet.amount).toBe(150);
  });

  it('should update the products purchased in a inmutable way', () => {
    const initialState = {
      wallet: {
        amount: 400,
      },
      productsPurchased: [],
    };

    const action = updateUserProductsPurchased({
      productsPurchased: [1, 2, 3],
    });
    const state = userReducers(initialState, action);

    expect(state.productsPurchased?.length).toBe(3);
  });
});
