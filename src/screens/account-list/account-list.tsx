import React, { FC } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Headline, FAB } from "react-native-paper";
import { spacing } from "../../theme";
import { useNavigation } from "@react-navigation/native";
import { Account } from "../../offline-database/account.model";
import { AccountTile } from "./account-tile";

interface Props {
  accounts: Account[];
  onRefresh: CallableFunction;
  isRefreshing: boolean;
}

export const AccountList: FC<Props> = ({
  accounts,
  onRefresh,
  isRefreshing,
}) => {
  const navigation = useNavigation();
  // const createNewAccount = () => navigation.navigate("account-details", { isNew: true })
  const createNewAccount = () => {};

  return (
    <>
      <View style={styles.root}>
        <FlatList
          ListHeaderComponent={
            <View style={styles.headerContainer}>
              <Headline>Accounts</Headline>
            </View>
          }
          data={accounts}
          renderItem={({ item }) => <AccountTile account={item} />}
          keyExtractor={(item) => item.id}
          onRefresh={onRefresh}
          refreshing={isRefreshing}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <FAB icon="plus" style={styles.createButton} onPress={createNewAccount} />
    </>
  );
};

const styles = StyleSheet.create({
  createButton: {
    bottom: spacing.none,
    margin: spacing.large,
    position: "absolute",
    right: spacing.none,
  },
  headerContainer: {
    marginBottom: spacing.huge,
  },
  root: {
    marginTop: spacing.huge,
    paddingHorizontal: spacing.large,
  },
});
