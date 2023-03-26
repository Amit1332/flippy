import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  name: string | null;
  token: string | null;
}

const initialState: AuthState = {
  name: null,
  token: null,
};

export const authSupplierSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setSupplier: (
      state,
      action: PayloadAction<{ name: string; token: string }>
    ) => {
      state.name = action.payload.name;
      state.token = action.payload.token;
    },
    defaultState: (state) => {
      state = initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSupplier, defaultState } = authSupplierSlice.actions;

export default authSupplierSlice.reducer;