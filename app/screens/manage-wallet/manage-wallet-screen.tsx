import React, { FC, useState } from "react";
import {
  View,
  ViewStyle,
  TextStyle,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { observer } from "mobx-react-lite";
import { Screen, GradientBackground, Text, Icon } from "../../components";
import { color, typography } from "../../theme";
import { NavigatorParamList } from "../../navigators";
import { ScrollView } from "react-native-gesture-handler";

const style = StyleSheet.create({});

const FULL: ViewStyle = { flex: 1 };
const CONTAINER: ViewStyle = {
  flex: 1,
};
const COINT_ITEM: TextStyle = {
  color: color.palette.white,
  fontFamily: typography.primary,
  fontSize: 15,
  fontWeight: "500",
};
const BOLD: TextStyle = { fontWeight: "bold" };

const TAGLINE2: TextStyle = {
  color: color.palette.lightGrey,
  fontSize: 12,
  lineHeight: 22,
  marginHorizontal: "auto",
  width: "70%",
};

const CUBE_CONTAINER: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  width: "100%",
  backgroundColor: color.palette.deepBlue,
  paddingVertical: 5,
};
const COIN_TEXT_CONTAINER: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
};
const COINS: TextStyle = {
  ...BOLD,
  fontSize: 14,
  lineHeight: 20,
  fontStyle: "normal",
  color: "white",
};

const TITLE2: TextStyle = {
  ...BOLD,
  fontSize: 20,
  fontStyle: "normal",
  color: "white",
};
const SUB_TEXT: TextStyle = {
  fontSize: 10,
  color: color.palette.lightGrey,
  fontWeight: "normal",
};
const ROOT: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  paddingHorizontal: 10,
  marginHorizontal: 15,
  marginVertical: 10,
};

const COIN_CARD: ViewStyle = {
  backgroundColor: color.palette.deepBlue,
  width: "87%",
  height: 90,
  marginTop: 10,
  marginHorizontal: "auto",
  borderRadius: 8,
  padding: 15,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignContent: "center",
};
const CENTER: ViewStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginHorizontal: "auto",
};
const FLEX: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginHorizontal: "auto",
};

const BOTTOM: ViewStyle = {
  backgroundColor: color.palette.deeperBlue,
  width: "100%",
  marginHorizontal: "auto",
  marginBottom: -20,
  paddingBottom: 200,
  marginTop: 20,
  minHeight: 800,
};

const SEARCH: ViewStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
  width: "100%",
  height: 30,
};
const SEARCHBAR: ViewStyle = {
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  backgroundColor: color.palette.deepBlue,
  width: "87%",
  height: 32,
  marginTop: 10,
};
const MANAGE: ViewStyle = {
  width: 32,
  height: 30,
  borderRadius: 3,
  backgroundColor: color.palette.deepBlue,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
};

export const ManageWalletScreen: FC<StackScreenProps<NavigatorParamList>> =
  observer(({ navigation }) => {
    const [summary, setSummary] = useState(false);
    const toggleSummary = () => {
      setSummary(!summary);
    };
    const [balance, setBalance] = useState(true);
    const toggleBalance = () => {
      setBalance(!balance);
      console.log("balance is ", balance);
    };
    const goBack = () => navigation.goBack();
    const NextScreen = () => navigation.navigate("ManageWalletScreen");

    return (
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ marginBottom: 1 }}
      >
        <View testID="ManageWalletScreen" style={FULL}>
          <GradientBackground
            colors={[color.palette.deeperBlue, color.palette.deeperBlue]}
          />
          <Screen
            style={CONTAINER}
            preset="scroll"
            backgroundColor={color.palette.deeperBlue}
          >
            <View style={[ROOT, { marginVertical: 10, marginTop: 50 }]}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity onPress={goBack}>
                  <Icon
                    icon="back"
                    style={{ padding: 6, marginRight: 20, height: 15 }}
                  />
                </TouchableOpacity>
                <Text style={{}} preset="header" text="All Assets" />
              </View>
              <View style={MANAGE}>
                <TouchableOpacity onPress={NextScreen}>
                  <Icon icon="plus" style={{ padding: 6, height: 15 }} />
                </TouchableOpacity>
              </View>
            </View>

            <View style={[{ marginLeft: 30, marginVertical: 20 }]}>
              <Text style={TITLE2} text="Assets (6/162) " />
              <Text
                style={TAGLINE2}
                text="Enable assets to add them to your portfolio. Assets with a balance cannot be disabled."
              />
            </View>
            <View style={SEARCH}>
              <View style={SEARCHBAR}>
                <Icon
                  icon="search"
                  style={{ padding: 6, marginRight: 5, height: 15 }}
                />
                <Text
                  style={{ color: color.palette.lightGrey, fontSize: 16 }}
                  text="Search..."
                />
              </View>
            </View>

            <View style={BOTTOM}>
              <View style={CUBE_CONTAINER}>
                <Text style={COINS} text="ALL" />
                <Text style={COINS} text="ETH" />
                <Text style={COINS} text="BSC" />
                <Text style={COINS} text="SOLANA" />
                <Text style={COINS} text="DEFI" />
              </View>
              <View style={[CENTER, { marginTop: 10 }]}>
                <CoinComponent coin="Bitcoin" icon="btc" checked />
                <CoinComponent coin="Dogecoin" icon="doge" checked />
                <CoinComponent coin="Etherum" icon="etherum" checked />
                <CoinComponent coin="Tron" icon="tron" checked />
                <CoinComponent coin="XRP" icon="btc" checked={false} />
                <CoinComponent coin="Litecoin" icon="ltc" checked={false} />
                <CoinComponent
                  coin="BitcoinCash"
                  icon="bcash"
                  checked={false}
                />
                <CoinComponent coin="Theta" icon="theta" checked={false} />
                <CoinComponent coin="Monero" icon="monero" checked={false} />
              </View>
            </View>
          </Screen>
          <View />
        </View>
      </ScrollView>
    );
  });

const CoinComponent: React.FC<{ coin: string; icon: any; checked?: boolean }> =
  ({ coin, icon, checked }) => {
    return (
      <TouchableOpacity style={COIN_CARD}>
        <View style={[FLEX, { width: "100%" }]}>
          <View style={COIN_TEXT_CONTAINER}>
            <Icon
              style={{
                height: 35,
                width: 35,
                marginRight: 20,
              }}
              icon={icon}
            />
            <Text style={COINT_ITEM}>{coin}</Text>
          </View>
          <Icon
            icon={checked ? "greenCheck" : "redTimes"}
            style={{ height: 20, marginRight: -25 }}
          />
        </View>
      </TouchableOpacity>
    );
  };
