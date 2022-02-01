import React, { FC } from "react";
import {
  View,
  TextInput,
  ViewStyle,
  TextStyle,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { observer } from "mobx-react-lite";
import {
  Button,
  Screen,
  GradientBackground,
  Text,
  Icon,
} from "../../components";
import { color, spacing, typography } from "../../theme";
import { NavigatorParamList } from "../../navigators";
import { TouchableOpacity } from "react-native-gesture-handler";

const FULL: ViewStyle = { flex: 1 };
const CONTAINER: ViewStyle = {
  backgroundColor: color.palette.deeperBlue,
  paddingHorizontal: spacing[4],
};
const TEXT: TextStyle = {
  color: color.palette.white,
  fontFamily: typography.primary,
};
const BOLD: TextStyle = { fontWeight: "bold" };
const IMPORT_BUTTON: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
  backgroundColor: color.palette.purple,
  borderRadius: 10,
  marginBottom: 20,
  width: 327,
  alignSelf: "center",
};

const TAG_CONTAINER: TextStyle = {
  // width: "70%",
  paddingHorizontal: 50,
  display: "flex",
  justifyContent: "center",
  fontWeight: "400",
  fontSize: 14,
  lineHeight: 24,
};
const TAGLINE: TextStyle = {
  color: color.palette.lightGrey,
  textAlign: "center",
  fontSize: 15,
  lineHeight: 22,
  marginHorizontal: "auto",
  marginBottom: spacing[4] + spacing[1],
};
const TAGLINE2: TextStyle = {
  color: color.palette.lightGrey,
  fontSize: 12,
  lineHeight: 22,
  marginHorizontal: "auto",
  marginBottom: spacing[4] + spacing[1],
  marginLeft: 5,
};
const CONTINUE_TEXT: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 15,
  letterSpacing: 2,
  color: color.palette.white,
  fontStyle: "normal",
  fontWeight: "500",
  lineHeight: 20,
};

const FOOTER: ViewStyle = { backgroundColor: color.palette.deeperBlue };
const FOOTER_CONTENT: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
};
const TITLE: TextStyle = {
  ...BOLD,
  fontSize: 18,
  lineHeight: 25,
  textAlign: "center",
  marginBottom: spacing[5],
  fontStyle: "normal",
  color: "white",
  marginTop: 40,
};

export const ImportFromSeedScreen: FC<
  StackScreenProps<NavigatorParamList, "ImportFromSeedScreen">
> = observer(({ navigation }) => {
  const NextScreen = () => navigation.navigate("SecureYourWalletScreen");

  return (
    <View testID="WelcomeScreen" style={FULL}>
      <GradientBackground
        colors={[color.palette.deeperBlue, color.palette.deeperBlue]}
      />
      <Screen
        style={CONTAINER}
        preset="scroll"
        backgroundColor={color.palette.deeperBlue}
      >
        <View />
        <Text style={TITLE} preset="header" text="Import From Seed" />
        <View style={TAG_CONTAINER}>
          <Text style={TAGLINE} text="" />
        </View>
        <View style={styles.formContainer}>
          <View style={styles.textInputInputWrapper}>
            <TextInput
              placeholder="Seed Phrase"
              style={{
                backgroundColor: color.palette.deepBlue,
                width: "80%",
              }}
            />
            <TouchableOpacity>
              <View style={styles.textInputIconWrapper}>
                <Icon icon="scan" />
                <Icon icon="eyeOpen" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Screen>
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          width: 327,
          alignSelf: "center",
        }}
      >
        <Text
          style={TAGLINE2}
          text="By proceeding, you agree to these Term and Conditions."
        />
      </View>

      <SafeAreaView style={FOOTER}>
        <View style={FOOTER_CONTENT}>
          <View
            style={{
              height: 10,
            }}
          ></View>

          <Button
            style={IMPORT_BUTTON}
            textStyle={CONTINUE_TEXT}
            text="Import"
            onPress={NextScreen}
          />
        </View>
      </SafeAreaView>
    </View>
  );
});

const styles = StyleSheet.create({
  profilePage: {
    width: "100%",
    flex: 1,
    justifyContent: "flex-start",
  },
  formContainer: {
    marginVertical: 5,
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
    color: color.palette.white,
    marginBottom: 10,
    fontWeight: "100",
  },
  textInput: {
    height: 50,
    color: color.palette.black,
    flex: 1,
    flexDirection: "row",
  },
  textInputIconWrapper: {
    display: "flex",
    flexDirection: "row",
    width: 50,
    height: 64,
    justifyContent: "space-between",
    alignItems: "center",
  },
  textInputInputWrapper: {
    borderRadius: 10,
    // elevation: 1,
    width: "95%",
    backgroundColor: color.palette.deepBlue,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: "auto",
    textAlign: "center",
  },
  textFeild: {
    width: 325,
    backgroundColor: color.palette.deepBlue,
    height: 50,
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
