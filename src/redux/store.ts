import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/auth.slice";
import { accountReducer } from "./slices/accounts.slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    accounts: accountReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
