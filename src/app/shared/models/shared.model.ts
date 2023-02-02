export interface IUserData {
  id: number;
  name: string;
  lastName: string;
  wallet: IWallet;
}

export interface IWallet {
  amount: number;
}

export interface IProduct {
  id: number;
  image: string;
  name: string;
  price: number;
}

export interface IProductUI extends IProduct {
  buttonStatus: boolean;
}
