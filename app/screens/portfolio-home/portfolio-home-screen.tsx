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
  color: color.palette.black,
  fontFamily: typography.primary,
  fontSize: 15,
  fontWeight: "500",
  marginTop: 20,
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
  backgroundColor: "white",
  width: 500,
  paddingVertical: 20,
  marginLeft: -10,
};
const CUBE: ViewStyle = {
  backgroundColor: "#17C682",
  height: 65,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 10,
  width: 70,
  opacity: 0.5,
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
  color: "black",
  height: 40,
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
  marginTop: 10,
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
  backgroundColor: "white",
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
  backgroundColor: color.palette.white,
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
  const ProductScreen = () => navigation.navigate("ProductScreen");
  const gotobuy = () => navigation.navigate("ProductScreen");
  const ReceiveCoin = () => navigation.navigate("ReceiveCoinScreen");
  const swapScreen = () => navigation.navigate("SwapCoinScreen");
  const CoinDetailsScreen = () => navigation.navigate("CoinDetailsScreen");

  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ marginBottom: 1 }}>
      <View testID="PortfolioHomeScreen" style={FULL}>
        <GradientBackground colors={["white", "white"]} />
        <Screen style={CONTAINER} preset="scroll" backgroundColor="white">
          <View style={[ROOT, { marginVertical: 0, marginTop: 50 }]}>
            <Text
              style={{ fontSize: 25, color: "black" }}
              preset="header"
              text="SociaLiga"
            />
          </View>

          <View style={[ROOT, { marginVertical: 20, marginTop: 0 }]}>
            <Text style={TAGLINE2} text="Welcome back Bolaji Fuga" />
          </View>

          <View style={[ROOT, { marginVertical: 30, marginTop: 10 }]}>
            <Text
              style={{ fontSize: 25, color: "black" }}
              preset="header"
              text="Dashboard"
            />
          </View>

          <ScrollView
            horizontal
            style={{
              backgroundColor: color.palette.deeperBlue,
              paddingBottom: 0,
            }}
          >
            <View style={[BIG_CUBE_CONTAINER, { marginLeft: 0 }]}>
              <View>
                <TouchableOpacity onPress={gotobuy} style={CUBE}>
                  <Icon style={{ height: 30 }} icon="chart" />
                </TouchableOpacity>
                <Text
                  style={{
                    fontSize: 13,
                    color: "#969696",
                    textAlign: "center",
                    marginTop: 10,
                  }}
                >
                  Insights
                </Text>
              </View>
              <View>
                <TouchableOpacity onPress={gotobuy} style={CUBE}>
                  <Icon style={{ height: 30 }} icon="cube" />
                </TouchableOpacity>
                <Text
                  style={{
                    fontSize: 13,
                    color: "#969696",
                    textAlign: "center",
                    marginTop: 10,
                  }}
                >
                  Add a Product
                </Text>
              </View>
              <View>
                <TouchableOpacity onPress={gotobuy} style={CUBE}>
                  <Icon style={{ height: 30 }} icon="van" />
                </TouchableOpacity>
                <Text
                  style={{
                    fontSize: 13,
                    color: "#969696",
                    textAlign: "center",
                    marginTop: 10,
                  }}
                >
                  Sales
                </Text>
              </View>
              <View>
                <TouchableOpacity onPress={gotobuy} style={CUBE}>
                  <Icon style={{ height: 30 }} icon="percent" />
                </TouchableOpacity>
                <Text
                  style={{
                    fontSize: 13,
                    color: "#969696",
                    textAlign: "center",
                    marginTop: 10,
                  }}
                >
                  Discounts
                </Text>
              </View>
            </View>
          </ScrollView>
          <View style={{ paddingBottom: 200 }}>
            <View style={[ROOT, { marginVertical: 30, marginTop: 10 }]}>
              <Text
                style={{ fontSize: 25, color: "black" }}
                preset="header"
                text="Latest Sales"
              />
            </View>
            <View style={CUBE_CONTAINER}>
              <View
                style={{
                  backgroundColor: "#F2F2F2",
                  width: 50,
                  paddingTop: 20,
                  height: 50,
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 10,
                }}
              >
                <Text style={COINS} text="ALL" />
              </View>
              <View
                style={{
                  // backgroundColor: "#F2F2F2",
                  width: 50,
                  paddingTop: 20,
                  height: 50,
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 10,
                }}
              >
                <Text style={COINS} text="Week" />
              </View>
              <View
                style={{
                  // backgroundColor: "#F2F2F2",
                  width: 50,
                  paddingTop: 20,
                  height: 50,
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 10,
                }}
              >
                <Text style={COINS} text="Month" />
              </View>
              <View
                style={{
                  backgroundColor: "#F2F2F2",
                  width: 40,
                  height: 40,
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 10,
                  marginTop: 5,
                }}
              >
                <Icon style={{ height: 18 }} icon="calendar" />
              </View>
            </View>
            <View style={[CENTER, { marginTop: 20 }]}>
              <CoinComponent coin="Etherum" icon="shirt" amount=" N1,352.03" />
              <CoinComponent coin="Dogecoin" icon="shirt" amount=" N1,352.03" />
              <CoinComponent coin="Tron" icon="shirt" amount=" N1,352.03" />
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
        <Icon style={{ height: 50, width: 50, marginRight: 20 }} icon={icon} />
        <View style={COIN_TEXT_CONTAINER}>
          <Text style={COINT_ITEM}>SociaLiga Football Jersey</Text>
          <Text style={SUB_TEXT}>ID 10-3290-08</Text>
        </View>
      </View>
      <View style={COIN_TEXT_CONTAINER}>
        <Text style={COINT_ITEM}>{amount}</Text>
      </View>
    </View>
  );
};
