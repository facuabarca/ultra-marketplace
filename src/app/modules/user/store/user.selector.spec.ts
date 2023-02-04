import { selectUserWallet, selectUserProductsPurchased } from './user.selector';

describe('testing user selector', () => {
  it('should select the user wallet', () => {
    const initialState = {
      wallet: {
        amount: 199,
      },
      productsPurchased: [],
    };

    const result = selectUserWallet.projector(initialState);

    expect(result).toBe(199);
  });

  it('should select the products purchased', () => {
    const initialState = {
      wallet: {
        amount: 199,
      },
      productsPurchased: [15656, 4444, 774],
    };

    const result = selectUserProductsPurchased.projector(initialState);

    expect(result.length).toBe(3);
    expect(result[0]).toEqual(15656);
  });
});
