import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/auth.slice";
import { baseApi } from "./api/baseApi";
import checkoutReducer from "./features/Checkout/Checkout.slice";
export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: authReducer,
    checkouts: checkoutReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
