import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Account } from "../../offline-database/account.model";

// Define a type for the slice state
interface AccountsState {
  accountList: Account[];
  selectedAccount: Account | null;
}

// Define the initial state
const initialState: AccountsState = {
  accountList: [],
  selectedAccount: null,
};

const accountSlice = createSlice({
  name: "accounts",
  initialState,
  reducers: {
    setAccounts: (state, action: PayloadAction<Account[]>) => {
      state.accountList = action.payload;
    },
  },
});

export const { setAccounts } = accountSlice.actions;

export const accountReducer = accountSlice.reducer;
