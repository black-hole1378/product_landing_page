import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppState } from "./ProductStore";
interface Product {
  name: string;
  edition: string;
  quantity: number;
  image: string[];
  mainPrice: number;
  discount: string;
}

interface Products {
  products: Product[];
  index: number;
}

const initialState: Products = {
  products: [],
  index: 0,
};

const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<Product>) {
      state.products.push(action.payload);
      state.index++;
    },
    removeProduct(state, action: PayloadAction<number>) {
      state.products.splice(action.payload);
    },
  },
});

export const Productreducer = ProductSlice.reducer;
export const { addProduct } = ProductSlice.actions;
export const index = (state: AppState) => state.index;
