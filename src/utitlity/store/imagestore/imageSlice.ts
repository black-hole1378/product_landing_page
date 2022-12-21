import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppState } from "./imageStore";
export interface ImageState {
  index: number;
}

const initialState: ImageState = {
  index: 0,
};

export const imageSlice = createSlice({
  name: "image_slice",
  initialState,
  reducers: {
    changeIndex(state, action: PayloadAction<number>) {
      state.index += action.payload;
    },
  },
});

export const imageReducer = imageSlice.reducer;
export const { changeIndex } = imageSlice.actions;
export const selectImageState = (state: AppState) => state.index;
