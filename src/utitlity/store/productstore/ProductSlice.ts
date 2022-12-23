import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Product {
  name: string;
  quantity: number;
  image: string[];
  mainPrice: number;
  discount: number;
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
