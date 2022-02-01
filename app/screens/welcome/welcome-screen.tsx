import React, { FC } from "react";
import {
  View,
  ViewStyle,
  TextStyle,
  ImageStyle,
  SafeAreaView,
} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { observer } from "mobx-react-lite";
import { Button, Screen, GradientBackground } from "../../components";
import { color, spacing, typography } from "../../theme";
import { NavigatorParamList } from "../../navigators";

const FULL: ViewStyle = {
  flex: 1,
  backgroundColor: color.palette.deepBlue,
};
const CONTAINER: ViewStyle = {
  backgroundColor: color.palette.deepBlue,
  paddingHorizontal: spacing[4],
};
const TEXT: TextStyle = {
  color: color.palette.white,
  fontFamily: typography.primary,
};
const BOLD: TextStyle = { fontWeight: "bold" };
const BOWSER: ImageStyle = {
  alignSelf: "center",
  marginVertical: spacing[5],
  maxWidth: "100%",
  width: 200,
  height: 200,
  marginTop: 50,
  backgroundColor: color.palette.deepBlue,
};
const CREATE_BUTTON: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
  backgroundColor: color.palette.purple,
  borderRadius: 10,
  width: 327,
};
const IMPORT_BUTTON: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
  backgroundColor: color.palette.lighterPurple,
  borderRadius: 10,
  width: 327,
  marginBottom: 20,
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
const FOOTER: ViewStyle = { backgroundColor: color.palette.deepBlue };
const FOOTER_CONTENT: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

export const WelcomeScreen: FC<
  StackScreenProps<NavigatorParamList, "welcome">
> = observer(({ navigation }) => {
  const CreateALockScreen = () => navigation.navigate("CreateALockScreen");
  const ImportWallet = () => navigation.navigate("ImportFromSeedScreen");

  return (
    <View testID="WelcomeScreen" style={FULL}>
      <GradientBackground
        colors={[color.palette.deepBlue, color.palette.deepBlue]}
      />
      <Screen
        style={CONTAINER}
        preset="scroll"
        backgroundColor={color.transparent}
      >
        {/* <Image source={bowserLogo} style={BOWSER} /> */}
      </Screen>
      <SafeAreaView style={FOOTER}>
        <View style={FOOTER_CONTENT}>
          <Button
            style={CREATE_BUTTON}
            textStyle={CONTINUE_TEXT}
            onPress={CreateALockScreen}
            text="Create a New Account"
          />
          <View
            style={{
              height: 10,
            }}
          ></View>
          <Button
            style={IMPORT_BUTTON}
            textStyle={CONTINUE_TEXT}
            text="Restore CoinMika Wallet"
            onPress={ImportWallet}
          />
        </View>
      </SafeAreaView>
    </View>
  );
});
