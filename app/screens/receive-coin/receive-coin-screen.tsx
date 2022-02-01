import React, { FC, useState } from "react";
import {
  View,
  ViewStyle,
  TextStyle,
  Text as NativeText,
  TouchableOpacity,
} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { observer } from "mobx-react-lite";
import { Screen, GradientBackground, Text, Icon } from "../../components";
import { color, spacing, typography } from "../../theme";
import { goBack, NavigatorParamList } from "../../navigators";
import { ScrollView } from "react-native-gesture-handler";

const FULL: ViewStyle = { flex: 1 };
const CONTAINER: ViewStyle = {
  flex: 1,
  marginTop: 50,
};
const COINT_ITEM: TextStyle = {
  color: color.palette.white,
  fontFamily: typography.primary,
  fontSize: 15,
  fontWeight: "500",
};
const COIN_ITEM: TextStyle = {
  color: "#A6A0BB",
  fontFamily: typography.primary,
  fontSize: 12,
  fontWeight: "500",
};
const BOLD: TextStyle = { fontWeight: "bold" };

const COIN_TEXT_CONTAINER: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  width: "80%",
  justifyContent: "space-between",
};

const TITLE: TextStyle = {
  ...BOLD,
  fontSize: 20,
  fontStyle: "normal",
  color: "white",
};

const ROOT: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  // justifyContent: "space-evenly",
  paddingHorizontal: 10,
  marginHorizontal: 15,
  marginVertical: 10,
};

const COIN_CARD: ViewStyle = {
  backgroundColor: color.palette.deeperBlue,
  width: "95%",
  height: 90,
  marginTop: 10,
  marginHorizontal: "auto",
  borderRadius: 12,
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
  paddingBottom: 500,
  marginTop: 20,
  height: "100%",
};

const SEARCH: ViewStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
  width: "100%",
  // height: 30,
};
const SEARCHBAR: ViewStyle = {
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  backgroundColor: color.palette.deeperBlue,
  width: "87%",
  height: 40,
  marginTop: 10,
  borderRadius: 8,
};

export const ReceiveCoinScreen: FC<StackScreenProps<NavigatorParamList>> = observer(
  ({ navigation }) => {
    const goBack = () => navigation.goBack();
    const details = () => navigation.navigate("ReceiveBTCScreen");
    const [currency, setCurrency] = useState("NGN");

    return (
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ marginBottom: 1 }}
      >
        <View testID="ReceiveCoinScreen" style={FULL}>
          <GradientBackground
            colors={[color.palette.deeperBlue, color.palette.deeperBlue]}
          />
          <Screen
            style={CONTAINER}
            preset="scroll"
            backgroundColor={color.palette.deeperBlue}
          >
            <View style={BOTTOM}>
              <View style={CENTER}>
                <View style={LINE}></View>
              </View>
              <View style={[ROOT, { marginVertical: 10, marginTop: 50 }]}>
                <TouchableOpacity onPress={goBack}>
                  <Icon
                    icon="back"
                    style={{ marginRight: 20, padding: 6, height: 15 }}
                  />
                </TouchableOpacity>
                <Text style={TITLE} preset="header" text="Receive" />
              </View>
              <View style={SEARCH}>
                <View style={SEARCHBAR}>
                  <Icon
                    icon="search"
                    style={{ padding: 6, marginRight: 5, height: 15 }}
                  />
                  <Text
                    style={{ color: color.palette.lightGrey, fontSize: 16 }}
                    text="Search Coin"
                  />
                </View>
              </View>
              <View style={[CENTER, { marginTop: 20 }]}>
                <CoinComponent
                  coin="Etherum"
                  icon="etherum"
                  name="0.35 ETH"
                  onPress={details}
                />
                <CoinComponent
                  coin="Bitcoin"
                  icon="btc"
                  name="1005.78 BTC"
                  onPress={() => setCurrency("GBP")}
                />
                <CoinComponent
                  coin="Dogecoin"
                  icon="doge"
                  name="1.35 DOGE"
                  onPress={() => setCurrency("USD")}
                />
                <CoinComponent
                  coin="Etherum"
                  icon="etherum"
                  name="0.35 ETH"
                  onPress={details}
                />
                <CoinComponent
                  coin="Bitcoin"
                  icon="btc"
                  name="1005.78 BTC"
                  onPress={() => setCurrency("GBP")}
                />
                <CoinComponent
                  coin="Dogecoin"
                  icon="doge"
                  name="1.35 DOGE"
                  onPress={() => setCurrency("USD")}
                />
              </View>
            </View>
          </Screen>
          <View />
        </View>
      </ScrollView>
    );
  }
);

const CoinComponent: React.FC<{
  coin: string;
  icon: any;
  name: string;
  onPress?: any;
}> = ({ coin, icon, name, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        width: "98%",
        // borderColor: "red",
        paddingLeft: 20,
      }}
      onPress={onPress}
    >
      <View style={COIN_CARD}>
        <TouchableOpacity style={FLEX} onPress={onPress}>
          <View
            style={{
              display: "flex",
              borderRadius: 100,
              justifyContent: "center",
              alignItems: "center",
              marginRight: 30,
            }}
          >
            <Icon
              style={{ height: 35, width: 35, borderRadius: 100 }}
              icon={icon}
            />
          </View>
          <View style={COIN_TEXT_CONTAINER}>
            <Text style={COINT_ITEM}>{coin}</Text>
            <Text style={COINT_ITEM}>{name}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity></TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};
