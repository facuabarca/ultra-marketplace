export interface UserState {
  name?: string;
  lastName?: string;
  wallet: Wallet;
  productsPurchased?: number[];
}

export interface Wallet {
  amount: number;
}

export const userState: UserState = {
  wallet: {
    amount: 0,
  },
  productsPurchased: [],
};
