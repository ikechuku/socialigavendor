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
import {
  Screen,
  GradientBackground,
  Text,
  Icon,
  Button,
} from "../../components";
import { color, spacing, typography } from "../../theme";
import { goBack, NavigatorParamList } from "../../navigators";
import { ScrollView } from "react-native-gesture-handler";

const FULL: ViewStyle = { flex: 1 };
const CONTAINER: ViewStyle = {
  flex: 1,
  marginTop: 50,
};
const TEXT: TextStyle = {
  color: color.palette.white,
  fontFamily: typography.primary,
};
const BOLD: TextStyle = { fontWeight: "bold" };

const COINT_ITEM: TextStyle = {
  color: color.palette.lightGrey,
  fontFamily: typography.primary,
  fontSize: 16,
  fontWeight: "500",
  width: 300,
  textAlign: "center",
  marginTop: 20,
};
const CONTINUE_TEXT: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 15,
  letterSpacing: 2,
  color: color.palette.white,
  // fontFamily: "Avenir Next",
  fontStyle: "normal",
  fontWeight: "500",
  lineHeight: 20,
};

const COIN_TEXT_CONTAINER: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  width: "80%",
  justifyContent: "space-between",
};

const TITLE: TextStyle = {
  ...BOLD,
  fontSize: 24,
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

const IMPORT_BUTTON: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
  backgroundColor: color.palette.purple,
  borderRadius: 10,
  marginBottom: 20,
  width: "90%",
  alignSelf: "center",
};
const FOOTER_CONTENT: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
};

export const HighNetworkScreen: FC<StackScreenProps<NavigatorParamList>> =
  observer(({ navigation }) => {
    const goBack = () => navigation.goBack();
    const details = () => navigation.navigate("ConfirmSwapScreen");
    const [currency, setCurrency] = useState("NGN");

    return (
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ marginBottom: 1 }}
      >
        <View testID="HighNetworkScreen" style={FULL}>
          <GradientBackground
            colors={[color.palette.deeperBlue, color.palette.deeperBlue]}
          />
          <Screen
            style={CONTAINER}
            preset="scroll"
            backgroundColor={color.palette.deeperBlue}
          >
            <View style={BOTTOM}>
              {/* <View style={CENTER}>
                <View style={LINE}></View>
              </View> */}
              {/* <View style={[ROOT, { marginVertical: 10, marginTop: 50 }]}>
                <TouchableOpacity onPress={goBack}>
                  <Icon
                    icon="back"
                    style={{ marginRight: 20, padding: 6, height: 15 }}
                  />
                </TouchableOpacity>
                <Text style={TITLE} preset="header" text="Receive BTC" />
              </View>
              <View style={[CENTER, { marginTop: 20 }]}>
                <CoinComponent
                  coin="Bitcoin"
                  icon="btc"
                  name="1005.78 BTC"
                  onPress={() => setCurrency("GBP")}
                />
              </View> */}
              <TouchableOpacity
                style={[
                  FLEX,
                  {
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingBottom: 100,
                  },
                ]}
              >
                <View
                  style={{
                    display: "flex",
                    borderRadius: 10,
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 30,
                    height: 400,
                    width: "85%",
                    // backgroundColor: color.palette.deeperBlue,
                    marginHorizontal: "auto",
                  }}
                >
                  <Text style={TITLE}>High Network Fees</Text>

                  <Text style={COINT_ITEM}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Text>
                </View>
              </TouchableOpacity>
              <View style={FOOTER_CONTENT}>
                <Button
                  style={IMPORT_BUTTON}
                  textStyle={CONTINUE_TEXT}
                  text="Continue"
                  onPress={details}
                />
              </View>
            </View>
          </Screen>
          <View />
        </View>
      </ScrollView>
    );
  });

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
            <View>
              <Text style={COINT_ITEM}>{coin}</Text>
              <Text style={COINT_ITEM}>BTC</Text>
            </View>
            <View>
              <Text style={COINT_ITEM}>Available Balance</Text>
              <Text style={COINT_ITEM}>{name}</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity></TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};
