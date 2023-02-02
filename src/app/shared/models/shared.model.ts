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

export interface PlaceOrderInput {
  user: IUser;
  products: IProduct[];
  totalPrice: number;
}

export interface PlaceOrderResult {
  status: boolean;
  wallet: IWallet;
}

export interface IUser {
  name: string;
  surname: string;
  email: string;
  state: string;
  city: string;
  street: string;
}