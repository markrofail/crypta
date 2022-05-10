import React, { FC } from "react";
import { View, StyleSheet } from "react-native";
import { spacing } from "../../theme";
import { useNavigation } from "@react-navigation/native";
import { TouchableRipple, Card, Paragraph } from "react-native-paper";
import Moment from "moment";
import { Account } from "../../offline-database/account.model";

function formatDate(date: Date) {
  return Moment(date).format("DD/MM/YYYY");
}

interface Props {
  account: Account;
}

export const AccountTile: FC<Props> = ({ account }) => {
  const navigation = useNavigation();
  // const goToDetails = () => navigation.navigate("account-details", { accountId: account.id })
  const goToDetails = () => {};

  return (
    <View style={styles.container}>
      <TouchableRipple onPress={goToDetails}>
        <Card elevation={1}>
          <Card.Title
            title={account.name}
            subtitle={`created on: ${formatDate(account.createdAt)}`}
          />
          <Card.Content>
            <Paragraph>{account.username}</Paragraph>
          </Card.Content>
        </Card>
      </TouchableRipple>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 0,
    paddingVertical: spacing.smaller,
  },
  details: {
    fontSize: 12,
  },
  header: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: spacing.medium,
  },
});
