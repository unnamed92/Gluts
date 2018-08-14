import { Action } from '@ngrx/store';


export interface State {
  products: Product[]; //types?
}

export const initialState: State = {
  products = [
    {
      name: 'Обои', articul: '1045', brand: 'Fromental',  id: '1',
      price: '1045', image: '../../assets/images/shop_list_fitst.png',
    },
    {
      name: 'класс', articul: '1035', brand: 'Fromental', id: '2',
      price: '1045', image: '../../assets/images/shop_list_fiv.png'
    },
    {
      name: 'супер', articul: '1045', brand: 'Fromental', id: '3',
      price: '1045', image: '../../assets/images/shop_list_sec.png'
    },
    {
      name: 'Обои', articul: '1045', brand: 'Fromental', id: '4',
      price: '1045', image: '../../assets/images/shop_list_sec.png'
    },
    {
      name: 'Обои', articul: '1045', brand: 'Fromental', id: '5',
      price: '1045', image: '../../assets/images/shop_list_sec.png'
    },
    {
      name: 'Обои', articul: '1045', brand: 'Fromental', id: '6',
      price: '1045', image: '../../assets/images/shop_list_fiv.png'
    },
    {
      name: 'Обои', articul: '1045', brand: 'Fromental', id: '7',
      price: '1045', image: '../../assets/images/shop_list_fiv.png'
    },
    {
      name: 'Обои', articul: '1045', brand: 'Fromental', id: '8',
      price: '1045', image: '../../assets/images/shop_list_fiv.png'
    },
    {
      name: 'Обои', articul: '1045', brand: 'Fromental', id: '9',
      price: '1045', image: '../../assets/images/shop_list_fiv.png'
    },
  ],
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {
    default:
      return state;
  }
}
