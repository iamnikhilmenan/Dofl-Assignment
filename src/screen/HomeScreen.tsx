import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import AppScreen from "../component/AppScreen";
import Header from "../component/Header";
import BalanceDetails from "../component/BalanceDetails";
import Option from "../component/Option";
import InviteAndEarn from "../component/InviteAndEarn";
import GetFreeWalletHighlight from "../component/GetFreeWalletHighlight";
import { useNavigation } from "@react-navigation/native";

function HomeScreen({}): JSX.Element {
  const navigation = useNavigation();

  const onQRCodehandler = () => {
    console.log("qr code...");
    navigation.navigate("Scan");
  };

  return (
    <>
      <AppScreen style={{ paddingHorizontal: 18 }}>
        {/* :: Header */}
        <Header onQRCodehandler={onQRCodehandler} navigation={navigation} />
        {/* :: Total Balance Details */}
        <BalanceDetails />
        {/* :: Free wallet highlight */}
        <GetFreeWalletHighlight />
        {/* :: options */}
        <Option />
        {/* :: invite and earn */}
        <InviteAndEarn />
      </AppScreen>
    </>
  );
}

export default HomeScreen;
