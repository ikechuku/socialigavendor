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
  fontSize: 18,
  fontWeight: "500",
};
const COIN_ITEM: TextStyle = {
  color: "#A6A0BB",
  fontFamily: typography.primary,
  fontSize: 11,
  fontWeight: "400",
};
const BOLD: TextStyle = { fontWeight: "bold" };

const COIN_TEXT_CONTAINER: ViewStyle = {
  display: "flex",
  width: "80%",
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
  height: 70,
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
  height: 30,
};
const SEARCHBAR: ViewStyle = {
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  backgroundColor: color.palette.deeperBlue,
  width: "87%",
  height: 32,
  marginTop: 10,
  borderRadius: 8,
};

export const PaymentOptionsScreen: FC<StackScreenProps<NavigatorParamList>> =
  observer(({ navigation }) => {
    const goBack = () => navigation.goBack();
    const [Card, setCard] = useState(false);
    const [Transfer, setTransfer] = useState(false);
    const buycoin = () => setCard(!Card);
    const sellcoin = () => setTransfer(!Transfer);
    const CoinComponent: React.FC<{
      coin: string;
      icon: any;
      onPress?: any;
    }> = ({ coin, icon, onPress }) => {
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
                  // marginRight: 20,
                  backgroundColor: color.palette.lighterPurple,
                  padding: 8,
                }}
              >
                <Icon
                  style={{ height: 35, width: 35, borderRadius: 100 }}
                  icon={icon}
                />
              </View>
              <View style={COIN_TEXT_CONTAINER}>
                <Text style={COINT_ITEM}>{coin}</Text>
                <View style={{ width: "80%", marginTop: 5 }}>
                  <Text style={COIN_ITEM}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <Icon
                  style={{
                    height: 15,
                    width: 15,
                    // marginRight: -100,
                    marginTop: 12,
                  }}
                  icon="forward"
                />
              </View>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      );
    };

    return (
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ marginBottom: 1 }}
      >
        <View testID="PaymentOptionsScreen" style={FULL}>
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
                <Text style={TITLE} preset="header" text="Payment Options" />
              </View>

              <View style={[CENTER, { marginTop: 20 }]}>
                <CoinComponent
                  coin="Credit/Debit card"
                  icon="credit"
                  onPress={buycoin}
                />
                <CoinComponent
                  coin="Transfer"
                  icon="transfer"
                  onPress={sellcoin}
                />
              </View>
            </View>
          </Screen>
          <View />
        </View>
      </ScrollView>
    );
  });
