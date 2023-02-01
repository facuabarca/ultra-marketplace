export interface UserState {
  name?: string;
  lastName?: string;
  wallet: Wallet;
}

export interface Wallet {
  amount: number;
}

export const userState: UserState = {
  wallet: {
    amount: 0,
  },
};
