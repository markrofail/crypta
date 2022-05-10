import React, { FC, useEffect, useState } from "react"
import { AccountList } from "./account-list"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import AccountService from "../../offline-database/account.service"
import { Account } from "../../offline-database/account.model"
import { NavigatorParamList } from "../../navigation/app-navigator"

type Props = NativeStackScreenProps<NavigatorParamList, "account-list">

export const AccountListScreen: FC<Props> = () => {
  const [isRefreshing, setIsRefreshing] = useState(false)

  const [accounts, setAccounts] = useState<Account[]>([])

  const getAccounts = async () => {
    setIsRefreshing(true)
    const list = await AccountService.all()
    setAccounts(list)
    setIsRefreshing(false)
  }

  const onRefresh = () => { getAccounts() }
  useEffect(() => {
    getAccounts()
  }, [])

  return (
    <AccountList accounts={accounts}
      onRefresh={onRefresh}
      isRefreshing={isRefreshing}
    />
  )
}
