import React, { FC, useEffect, useState } from "react";
import { AccountList } from "./account-list";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import AccountService from "../../offline-database/account.service";
import { NavigatorParamList } from "../../navigation/app-navigator";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setAccounts } from "../../redux/slices/accounts.slice";

type Props = NativeStackScreenProps<NavigatorParamList, "account-list">;

export const AccountListScreen: FC<Props> = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const dispatch = useDispatch();
  const accounts = useSelector((state: RootState) => state.accounts.accountList);

  const getAccounts = async () => {
    setIsRefreshing(true);
    const list = await AccountService.all();
    dispatch(setAccounts(list));
    setIsRefreshing(false);
  };

  const onRefresh = () => {
    getAccounts();
  };
  useEffect(() => {
    getAccounts();
  }, []);

  return (
    <AccountList
      accounts={accounts}
      onRefresh={onRefresh}
      isRefreshing={isRefreshing}
    />
  );
};
