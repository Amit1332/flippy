import { configureStore } from "@reduxjs/toolkit";
import authSupplierReducer from "./state/supplier/authSupplierSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authSupplierApi } from "./api/supplier/authSupplierApi";
export const store = configureStore({
  reducer: {
    auth: authSupplierReducer,
    [authSupplierApi.reducerPath]: authSupplierApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authSupplierApi.middleware),
});



// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);