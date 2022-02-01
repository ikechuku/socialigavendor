import React, { FC, useState, useEffect } from "react";
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
import { useNavigation } from "@react-navigation/native";

import { create } from "apisauce";

import data from "../../coins";
// define the api

const FULL: ViewStyle = { flex: 1 };
const CONTAINER: ViewStyle = {
  flex: 1,
};
const COINT_ITEM: TextStyle = {
  color: color.palette.white,
  fontFamily: typography.primary,
  fontSize: 15,
  fontWeight: "500",
  marginRight: 20,
};
const CUBE_CONTAINER: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  width: "100%",
  backgroundColor: color.palette.deepBlue,
  paddingVertical: 5,
  alignSelf: "center",
};
const CUBER: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  width: "87%",
  justifyContent: "space-between",
};
const COIN_TEXT_CONTAINER: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
};
const COINS: TextStyle = {
  fontSize: 14,
  lineHeight: 20,
  fontStyle: "normal",
  color: "white",
};
const THEAD: TextStyle = {
  fontSize: 14,
  lineHeight: 20,
  fontStyle: "normal",
  color: color.palette.lightGrey,
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
  backgroundColor: color.palette.deeperBlue,
  width: "87%",
  height: 50,
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

const MANAGE: ViewStyle = {
  width: 32,
  height: 30,
  borderRadius: 3,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
};

export const MarketScreen: FC<StackScreenProps<NavigatorParamList>> = observer(
  () => {
    // const api = create({
    //   baseURL: "https://coinmikav2.herokuapp.com/api",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    // });

    // const [loading, setloading] = useState(false);
    // const [coins, setcoins] = useState([]);
    // const getCoins = () => {
    //   setloading(true);
    //   api
    //     .get("/coins/")
    //     .then((response) => {
    //       // setcoins(response.data);
    //       setloading(false);
    //     })
    //     .then(console.log);
    // };

    useEffect(() => {
      // getCoins();
    }, []);
    const navigation = useNavigation();

    const goBack = () => navigation.goBack();
    const NextScreen = () => navigation.navigate("CoinDetailsScreen");

    return (
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ marginBottom: 1 }}
      >
        <View testID="MarketScreen" style={FULL}>
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
                <Text style={{}} preset="header" text="Market" />
              </View>
              <View style={MANAGE}>
                <TouchableOpacity>
                  <Icon icon="search" style={{ padding: 6, height: 20 }} />
                </TouchableOpacity>
              </View>
            </View>

            <View style={BOTTOM}>
              <View style={CUBE_CONTAINER}>
                <View style={CUBER}>
                  <Text style={THEAD} text="Name" />
                  <Text style={THEAD} text="LastPrice" />
                  <Text style={COINS} text="24H Chg%" />
                </View>
              </View>
              <View style={[CENTER, { marginTop: 10 }]}>
                {data.map((coin, id) => {
                  return (
                    <CoinComponent
                      key={id}
                      coin={coin.symbol}
                      ngn={coin.name}
                      lastPrice={coin.price}
                      chg={coin.all_time_high_change_percentage}
                      checked={true}
                      onpress={() => {
                        navigation.navigate("CoinDetailsScreen", {
                          coin: coin,
                        });
                      }}
                    />
                  );
                })}
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
  lastPrice: string;
  ngn: string;
  chg: string;
  checked?: boolean;
  onpress: () => {};
}> = ({ coin, checked, lastPrice, ngn, chg, onpress }) => {
  return (
    <TouchableOpacity style={COIN_CARD} onPress={onpress}>
      <View style={[FLEX, { width: "100%" }]}>
        <View style={COIN_TEXT_CONTAINER}>
          <Text style={COINT_ITEM}>{coin}</Text>
          <Icon
            style={{
              height: 35,
              width: 35,
              marginRight: 20,
            }}
            icon={checked ? "greenChart" : "redChart"}
          />
          <View>
            <Text style={COINT_ITEM}>{lastPrice}</Text>
            <Text style={THEAD}>{ngn}</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: checked ? "green" : "red",
            height: 30,
            width: 70,
            borderRadius: 2,
          }}
        >
          <Text style={{ fontSize: 13 }}>{chg}%</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
