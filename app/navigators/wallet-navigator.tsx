import React from "react";
import {
  SecureSeedPhraseScreen,
  ManageWalletScreen,
  SeedPhraseSuccessfulScreen,
  WalletScreen,
} from "../screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator<NavigatorParamList>();
export type NavigatorParamList = {
  WalletHomeScreen: undefined;
  CreateALockScreen: undefined;
  SecureSeedPhraseScreen: undefined;
  ManageWalletScreen: undefined;
  SeedPhraseSuccessfulScreen: undefined;
};
const WalletStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="WalletHomeScreen" component={WalletScreen} />
      <Stack.Screen
        name="SecureSeedPhraseScreen"
        component={SecureSeedPhraseScreen}
      />
      <Stack.Screen name="ManageWalletScreen" component={ManageWalletScreen} />
      <Stack.Screen
        name="SeedPhraseSuccessfulScreen"
        component={SeedPhraseSuccessfulScreen}
      />
    </Stack.Navigator>
  );
};

export default WalletStack;
