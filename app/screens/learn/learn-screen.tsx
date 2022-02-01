import React, { FC } from "react";
import {
  View,
  ViewStyle,
  TextStyle,
  Image,
  TouchableOpacity,
} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { observer } from "mobx-react-lite";
import { Screen, GradientBackground, Text, Icon } from "../../components";
import { color, spacing, typography } from "../../theme";
import { NavigatorParamList } from "../../navigators";
import { ScrollView } from "react-native-gesture-handler";

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
const CUBE: ViewStyle = {
  backgroundColor: color.palette.deepBlue,
  height: 65,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 10,
  width: 70,
};
const TITLE: TextStyle = {
  ...BOLD,
  fontSize: 20,
  fontStyle: "normal",
  color: "white",
};
const SUB_TEXT: TextStyle = {
  fontSize: 14,
  color: color.palette.lightGrey,
  fontWeight: "normal",
  lineHeight: 20,
  marginTop: 5,
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
  backgroundColor: color.palette.deepBlue,
  height: 150,
  width: "96%",
  marginTop: 10,
  marginHorizontal: 0,
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  // borderWidth: 4,
};
const COIN_CARD: ViewStyle = {
  backgroundColor: color.palette.deepBlue,
  width: "96%",
  marginHorizontal: "auto",
  padding: 15,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignContent: "center",
};
const CENTER: ViewStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginHorizontal: "auto",
};
const DOT: ViewStyle = {
  height: 5,
  width: 5,
  backgroundColor: "white",
  flexDirection: "row",
  alignSelf: "flex-end",
  borderRadius: 100,
  marginRight: 4,
};
const DOT_CONTAINER: ViewStyle = {
  height: 20,
  width: "100%",
  flexDirection: "row",
  justifyContent: "space-between",
  marginTop: 5,
};

const bg = require("./bg.png");

export const LearnScreen: FC<StackScreenProps<NavigatorParamList>> = observer(
  ({ navigation }) => {
    return (
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ marginBottom: 1 }}
      >
        <View testID="LearnScreen" style={FULL}>
          <GradientBackground
            colors={[color.palette.deeperBlue, color.palette.deeperBlue]}
          />
          <Screen
            style={CONTAINER}
            preset="scroll"
            backgroundColor={color.palette.deeperBlue}
          >
            <View style={[ROOT, { marginVertical: 10, marginTop: 50 }]}>
              <Text style={TITLE} preset="header" text="Learning Portal" />
              <Icon style={{ height: 30, marginRight: -40 }} icon="bell" />
            </View>

            <View style={CUBE_CONTAINER}>
              <View style={CUBE}>
                <Icon style={{ height: 30, marginBottom: 5 }} icon="buysell" />
                <Text style={{ fontSize: 10 }}>Wallet Guide</Text>
              </View>
              <View style={CUBE}>
                <Icon style={{ height: 30, marginBottom: 5 }} icon="send" />
                <Text style={{ fontSize: 10 }}>Crypto News</Text>
              </View>
              <View style={CUBE}>
                <Icon style={{ height: 30, marginBottom: 5 }} icon="receive" />
                <Text style={{ fontSize: 10 }}>Trading Hints</Text>
              </View>
              <View style={CUBE}>
                <Icon style={{ height: 30, marginBottom: 5 }} icon="swap" />
                <Text style={{ fontSize: 10 }}>Learn Crypto</Text>
              </View>
            </View>

            <View style={[CENTER, { marginTop: 20 }]}>
              <CoinComponent />
              <CoinComponent />
              <CoinComponent />
            </View>
          </Screen>
          <View />
        </View>
      </ScrollView>
    );
  }
);

const CoinComponent = () => {
  return (
    <TouchableOpacity
      style={{ width: "100%", paddingHorizontal: 20, marginBottom: 5 }}
    >
      <View style={CENTER}>
        <Image source={bg} style={CARD} />
        <View style={COIN_CARD}>
          <View style={COIN_TEXT_CONTAINER}>
            <Text style={COINT_ITEM}>What is a token?</Text>
            <Text style={SUB_TEXT}>
              Technically, “token” is just another word for “cryptocurrency” or
              “Cryptoasset.” But inco...
            </Text>
            <View style={DOT_CONTAINER}>
              <View></View>
              <View style={{ flexDirection: "row" }}>
                <View style={DOT}></View>
                <View style={DOT}></View>
                <View style={DOT}></View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
