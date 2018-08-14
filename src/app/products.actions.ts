import { Action } from '@ngrx/store';

export enum ProductsActionTypes {
  LoadProducts = '[Products] Load Products'
}

export class LoadProducts implements Action {
  readonly type = ProductsActionTypes.LoadProducts;
}

export type ProductsActions = LoadProducts;