import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppState } from "./ProductStore";
export interface Product {
  name: string;
  edition: string;
  quantity: number;
  image: string[];
  mainPrice: number;
  discount: string;
}

interface Products {
  products: Product[];
  product_index: number;
}

const initialState: Products = {
  products: [],
  product_index: 0,
};

const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<Product>) {
      state.products.push(action.payload);
      state.product_index++;
      console.log(action.payload);
    },
    removeProduct(state, action: PayloadAction<number>) {
      state.products.splice(action.payload);
    },
  },
});

export const Productreducer = ProductSlice.reducer;
export const { addProduct } = ProductSlice.actions;
export const index = (state: AppState) => state.product_index;
