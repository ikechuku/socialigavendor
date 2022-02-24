import React, { FC, useState, useEffect } from "react";
import {
  View,
  ViewStyle,
  TextStyle,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { observer } from "mobx-react-lite";
import { Screen, GradientBackground, Text, Icon , } from "../../components";
import { color, spacing, typography } from "../../theme";
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
  width: "90%",
  backgroundColor: "#F0F0F0",
  paddingVertical: 5,
  alignSelf: "center",
  height: 35,
  borderRadius: 100,
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
  backgroundColor: color.palette.white,
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

const TAG_CONTAINER: TextStyle = {
  // width: "70%",
  paddingHorizontal: 50,
  display: "flex",
  justifyContent: "center",
  fontWeight: "400",
  fontSize: 14,
  lineHeight: 24,
  marginBottom: 60,
};
const TAGLINE: TextStyle = {
  color: color.palette.lightGrey,
  textAlign: "center",
  fontSize: 14,
  lineHeight: 24,
  marginHorizontal: "auto",
  marginBottom: spacing[4] + spacing[1],
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
    const PasswordInput = ({ placeholder }) => {
      const [visible, setVisible] = useState(false);

      function handleVisible() {
        setVisible(!visible);
      }
      return (
        <View style={styles.formContainer}>
          <View style={styles.textInputInputWrapper}>
            <TextInput
              style={{
                width: "90%",
                height: 40,
              }}
              placeholder={placeholder}
            />
          </View>
        </View>
      );
    };

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
            backgroundColor={color.palette.white}
          >
            <View style={[ROOT, { marginVertical: 10, marginTop: 50 }]}>
              <View style={MANAGE}>
                <TouchableOpacity>
                  <Icon
                    icon="back"
                    style={{ padding: 6, height: 20, marginLeft: -5 }}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: color.palette.black,
                    alignSelf: "center",
                    marginLeft: -350,
                  }}
                  preset="header"
                  text="Add a Product"
                />
              </View>
            </View>

            <View style={BOTTOM}>
              <View style={CUBE_CONTAINER}>
                <View style={CUBER}>
                  <View
                    style={{
                      backgroundColor: "black",
                      borderRadius: 100,
                      padding: 5,
                    }}
                  >
                    <Text style={COINS} text="Images" />
                  </View>
                  <Text style={THEAD} text="Details" />
                  <Text style={THEAD} text="Pricing" />
                  <Text style={THEAD} text="Images" />
                  <Text style={THEAD} text="Images" />
                </View>
              </View>
              <View style={{ marginVertical: 30, marginHorizontal: 10 }}>
                <Text
                  style={{
                    color: "black",
                    fontSize: 20,
                    fontWeight: "bold",
                    marginLeft: 20,
                  }}
                >
                  Details*
                </Text>

                <View style={styles.formContainer}>
                  <View style={styles.textInputInputWrapper}>
                    <TextInput
                      style={{
                        width: "90%",
                        height: 40,
                      }}
                      placeholder="Product Name"
                    />
                  </View>
                </View>
                <PasswordInput placeholder="0.0" />
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
const styles = StyleSheet.create({
  profilePage: {
    width: "100%",
    flex: 1,
    justifyContent: "flex-start",
  },
  formContainer: {
    marginVertical: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  textFieldWrapper: {
    width: "85%",
    alignSelf: "center",
    paddingTop: 20,
  },
  textInputLabel: {
    color: color.palette.black,
    marginBottom: 10,
    fontWeight: "100",
  },
  textInput: {
    height: 50,
    color: color.palette.black,
    flex: 1,
    flexDirection: "row",
    paddingVertical: 10,
  },
  textInputIconWrapper: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  textInputInputWrapper: {
    borderRadius: 10,
    // elevation: 1,
    width: "90%",
    backgroundColor: "white",
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: "auto",
    textAlign: "center",
    height: 55,
    borderWidth: 0.7,
  },
  textFeild: {
    width: 325,
    backgroundColor: color.transparent,
    height: 60,
    marginTop: 30,
    marginBottom: 15,
    borderRadius: 10,
    paddingLeft: 20,
    justifyContent: "center",
    borderWidth: 0.5,
    borderStyle: "solid",
    alignSelf: "center",
  },

  flatGreyBtn: {
    paddingHorizontal: 20,
    height: 40,
    borderRadius: 50,
    backgroundColor: "#eeeeee",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    paddingVertical: 10,
  },
  buttonsWrapper: {
    width: "100%",
    paddingLeft: 0,
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "center",
    alignSelf: "center",
  },
});
