import React, { FC, useState } from "react";
import {
  View,
  ViewStyle,
  TextStyle,
  Text as NativeText,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { observer } from "mobx-react-lite";
import { Screen, GradientBackground, Text, Icon } from "../../components";
import { color, spacing, typography } from "../../theme";
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

const TAGLINE: TextStyle = {
  color: color.palette.white,
  textAlign: "center",
  fontSize: 12,
  lineHeight: 13,
  marginHorizontal: "auto",
  marginBottom: spacing[4] + spacing[1],
  marginTop: spacing[2] + spacing[1],
};

const TAGLINE2: TextStyle = {
  color: color.palette.lightGrey,
  fontSize: 12,
  lineHeight: 22,
  marginHorizontal: "auto",
};
const COIN_NAME: TextStyle = {
  color: color.palette.white,
  fontSize: 10,
  lineHeight: 22,
  marginHorizontal: "auto",
  fontWeight: "bold",
  marginTop: 5,
};

const CUBE_CONTAINER: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  marginTop: 30,
  justifyContent: "space-evenly",
  width: "100%",
};
const COIN_TEXT_CONTAINER: ViewStyle = {
  display: "flex",
};
const BIG_CUBE_CONTAINER: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  // marginVertical: 40,
  justifyContent: "space-evenly",
  width: "100%",
};
const CUBE: ViewStyle = {
  backgroundColor: color.palette.deepBlue,
  height: 65,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 10,
  width: 70,
};
const BIG_CUBE: ViewStyle = {
  backgroundColor: color.palette.deepBlue,
  display: "flex",
  borderRadius: 20,
  padding: 15,
  height: 130,
  width: 140,
  marginHorizontal: 10,
  marginBottom: 10,
};
const SUMMARY_CONTENT: ViewStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
};
const BALANCE_CONTENT: ViewStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
};
const SUMMARY: ViewStyle = {
  backgroundColor: color.palette.deepBlue,
  // height: 150,
  width: "90%",
  marginTop: 10,
  marginHorizontal: "auto",
  borderRadius: 20,
};
const JUSTIFY_BETWEEN: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "100%",
};
const COINS: TextStyle = {
  ...BOLD,
  fontSize: 14,
  lineHeight: 20,
  fontStyle: "normal",
  color: "white",
};

const LIGHT_ITEM: ViewStyle = {
  width: "100%",
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  backgroundColor: color.palette.deepBlue,
  paddingHorizontal: 15,
  padding: 10,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  paddingRight: -20,
  alignItems: "center",
};
const BOTTOM_LIGHT_ITEM: ViewStyle = {
  borderBottomLeftRadius: 20,
  borderBottomRightRadius: 20,
  backgroundColor: color.palette.deepBlue,
  paddingHorizontal: 15,
  padding: 10,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
};
const DARK_ITEM: ViewStyle = {
  backgroundColor: color.palette.deeperBlue,
  paddingHorizontal: 15,
  padding: 10,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
};
const TITLE: TextStyle = {
  ...BOLD,
  fontSize: 20,
  fontStyle: "normal",
  color: "white",
};
const USD: TextStyle = {
  ...BOLD,
  fontSize: 20,
  fontWeight: "bold",
  color: color.palette.defaultBlue,
};
const SUB_TEXT: TextStyle = {
  fontSize: 10,
  color: color.palette.lightGrey,
  fontWeight: "normal",
};
const AMOUNT: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  marginBottom: 20,
};
const ROOT: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  paddingHorizontal: 10,
  marginHorizontal: 15,
  marginVertical: 10,
};

const CARD: ViewStyle = {
  backgroundColor: color.palette.purple,
  height: 150,
  width: "90%",
  marginTop: 10,
  marginHorizontal: "auto",
  borderRadius: 20,
  marginBottom: 10,
};
const COIN_CARD: ViewStyle = {
  backgroundColor: color.palette.deeperBlue,
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

const LINE: ViewStyle = {
  width: 40,
  height: 6,
  backgroundColor: color.palette.deeperBlue,
};
const BOTTOM: ViewStyle = {
  backgroundColor: color.palette.deepBlue,
  width: "100%",
  marginHorizontal: "auto",
  borderRadius: 40,
  marginBottom: -20,
  paddingTop: 20,
  paddingBottom: 200,
  marginTop: 20,
};

export const PortfolioHomeScreen: FC<
  StackScreenProps<NavigatorParamList, "PortfolioHomeScreen">
> = observer(({ navigation }) => {
  const [summary, setSummary] = useState(false);
  const toggleSummary = () => {
    setSummary(!summary);
  };
  const [balance, setBalance] = useState(false);
  const toggleBalance = () => {
    setBalance(!balance);
    console.log("balance is ", balance);
  };
  const MarketScreen = () => navigation.navigate("MarketScreen");
  const gotobuy = () => navigation.navigate("BuySellScreen");
  const ReceiveCoin = () => navigation.navigate("ReceiveCoinScreen");
  const swapScreen = () => navigation.navigate("SwapCoinScreen");
  const CoinDetailsScreen = () => navigation.navigate("CoinDetailsScreen");

  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ marginBottom: 1 }}>
      <View testID="PortfolioHomeScreen" style={FULL}>
        <GradientBackground
          colors={[color.palette.deeperBlue, color.palette.deeperBlue]}
        />
        <Screen
          style={CONTAINER}
          preset="scroll"
          backgroundColor={color.palette.deeperBlue}
        >
          <View style={[ROOT, { marginVertical: 10, marginTop: 50 }]}>
            <Text preset="header" text="Home" />
            <Icon style={{ height: 30, marginRight: -40 }} icon="bell" />
          </View>

          <View style={CENTER}>
            <View style={CARD}>
              <View style={BALANCE_CONTENT}>
                <View style={AMOUNT}>
                  <Text></Text>
                  {balance ? (
                    <TouchableOpacity onPress={toggleBalance}>
                      <Icon style={{ height: 15 }} icon="eyeOpen" />
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity onPress={toggleBalance}>
                      <Icon style={{ height: 15 }} icon="eyeClose" />
                    </TouchableOpacity>
                  )}
                </View>
                {balance ? (
                  <>
                    <NativeText style={TITLE}>
                      <Text style={USD} text="USD" /> 85,680
                    </NativeText>
                    <Text
                      style={TAGLINE}
                      text="$10.23(N5,000) over the last 24HRS"
                    />
                  </>
                ) : (
                  <>
                    <Text style={{ fontSize: 20 }} text="************" />
                    <Text style={{ fontSize: 20 }} text="******" />
                  </>
                )}
              </View>
            </View>
          </View>
          <View style={CENTER}>
            {!summary ? (
              <TouchableOpacity onPress={toggleSummary} style={SUMMARY}>
                <View
                  style={[
                    LIGHT_ITEM,
                    {
                      borderRadius: 10,
                      borderTopRightRadius: 10,
                      borderTopLeftRadius: 10,
                      paddingVertical: 15,
                    },
                  ]}
                >
                  <Text
                    style={{ color: color.palette.gray, fontSize: 14 }}
                    text="Portfolio Summary"
                  />
                  <View>
                    <Icon style={{ height: 10 }} icon="plus" />
                  </View>
                </View>
              </TouchableOpacity>
            ) : (
              <View style={SUMMARY}>
                <TouchableOpacity onPress={toggleSummary} style={LIGHT_ITEM}>
                  <Text
                    style={{ color: color.palette.gray, fontSize: 14 }}
                    text="Portfolio Summary"
                  />
                  <View>
                    <Icon style={{ height: 10 }} icon="times" />
                  </View>
                </TouchableOpacity>
                <View style={DARK_ITEM}>
                  <Text
                    style={{ color: color.palette.gray, fontSize: 14 }}
                    text="Portfolio Wallet (NGN)"
                  />
                </View>
                <View style={LIGHT_ITEM}>
                  <Text
                    style={{ color: color.palette.white, fontSize: 14 }}
                    text="NGN 200,000,000.00"
                  />
                </View>
                <View style={DARK_ITEM}>
                  <Text
                    style={{ color: color.palette.gray, fontSize: 14 }}
                    text="Portfolio P&L (24 hrs)"
                  />
                </View>
                <View style={BOTTOM_LIGHT_ITEM}>
                  <Text
                    style={{ color: color.palette.green, fontSize: 14 }}
                    text="+$10.23(N5,000)"
                  />
                </View>
              </View>
            )}
          </View>
          <View style={CUBE_CONTAINER}>
            <TouchableOpacity onPress={gotobuy} style={CUBE}>
              <Icon style={{ height: 30 }} icon="buysell" />
              <Text style={{ fontSize: 10 }}>Buy/Sell</Text>
            </TouchableOpacity>
            <View style={CUBE}>
              <Icon style={{ height: 30 }} icon="send" />
              <Text style={{ fontSize: 10 }}>Send</Text>
            </View>
            <TouchableOpacity style={CUBE} onPress={ReceiveCoin}>
              <Icon style={{ height: 30 }} icon="receive" />
              <Text style={{ fontSize: 10 }}>Receive</Text>
            </TouchableOpacity>
            <TouchableOpacity style={CUBE} onPress={swapScreen}>
              <Icon style={{ height: 30 }} icon="swap" />
              <Text style={{ fontSize: 10 }}>Swap</Text>
            </TouchableOpacity>
          </View>

          <View style={[ROOT, { marginVertical: 20 }]}>
            <Text style={TITLE} text="All Coins" />
            <TouchableOpacity onPress={MarketScreen}>
              <Text style={TAGLINE2} text="See all" />
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            style={{
              backgroundColor: color.palette.deeperBlue,
              paddingBottom: 0,
            }}
          >
            <View style={[BIG_CUBE_CONTAINER, { marginLeft: 12 }]}>
              <TouchableOpacity style={BIG_CUBE}>
                <Icon style={{ height: 25, width: 25 }} icon="usa" />
                <Text style={COIN_NAME}>USD</Text>
                <Text style={COIN_NAME}>USD 1,875.29</Text>
              </TouchableOpacity>
              <TouchableOpacity style={BIG_CUBE}>
                <View style={JUSTIFY_BETWEEN}>
                  <Icon style={{ height: 25, width: 25 }} icon="btc" />
                  <Text style={{ color: "green" }}>+5.67%</Text>
                </View>
                <Text style={COIN_NAME}>BTC</Text>
                <Text style={COIN_NAME}>0.35 BTC</Text>
                <Text
                  style={{
                    color: color.palette.lightGrey,
                    fontSize: 10,
                  }}
                >
                  USD 1,875.29
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={BIG_CUBE} onPress={CoinDetailsScreen}>
                <Icon style={{ height: 25, width: 25 }} icon="doge" />
                <Text style={COIN_NAME}>DOG</Text>
                <Text style={COIN_NAME}>USD 1,875.29</Text>
              </TouchableOpacity>
              <TouchableOpacity style={BIG_CUBE}>
                <Icon style={{ height: 25, width: 25 }} icon="etherum" />
                <Text style={COIN_NAME}>ETH</Text>
                <Text style={COIN_NAME}>USD 1,875.29</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
          <View style={BOTTOM}>
            <View style={CENTER}>
              <View style={LINE}></View>
            </View>
            <View style={[ROOT, { marginVertical: 10 }]}>
              <Text style={TITLE} preset="header" text="Trending Coins" />
            </View>
            <View style={CUBE_CONTAINER}>
              <Text style={COINS} text="ALL" />
              <Text style={COINS} text="ETH" />
              <Text style={COINS} text="BSC" />
              <Text style={COINS} text="SOLANA" />
              <Text style={COINS} text="DEFI" />
            </View>
            <View style={[CENTER, { marginTop: 20 }]}>
              <CoinComponent
                coin="Etherum"
                icon="etherum"
                amount="USD 1,352.03"
              />
              <CoinComponent
                coin="Dogecoin"
                icon="doge"
                amount="USD 1,352.03"
              />
              <CoinComponent coin="Tron" icon="tron" amount="USD 1,352.03" />
            </View>
          </View>
        </Screen>
        <View />
      </View>
    </ScrollView>
  );
});

const CoinComponent = ({ coin, icon, amount }) => {
  return (
    <View style={COIN_CARD}>
      <View style={FLEX}>
        <Icon style={{ height: 35, width: 35, marginRight: 20 }} icon={icon} />
        <View style={COIN_TEXT_CONTAINER}>
          <Text style={COINT_ITEM}>{coin}</Text>
          <Text style={SUB_TEXT}>{amount}</Text>
          <Text style={{ color: "green" }}>+5.67%</Text>
        </View>
      </View>
      <View style={COIN_TEXT_CONTAINER}>
        <Text style={COINT_ITEM}>0.35</Text>
        <Text style={SUB_TEXT}>USD 1,352.03</Text>
        <Text style={SUB_TEXT}>NGN 1,938,800.00</Text>
      </View>
    </View>
  );
};
