import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  WriteSeedPhraseScreen,
  SeedPhraseSuccessfulScreen,
  SettingsScreen,
  ChooseCurrencyScreen,
  CommunityScreen,
  WalletSettingsScreen,
} from "../../screens";

export type SettingsParamList = {
  SettingsScreen: undefined;
  CommunityScreen: undefined;
  WriteSeedPhraseScreen: undefined;
  SeedPhraseSuccessfulScreen: undefined;
  ChooseCurrencyScreen: undefined;
  WalletSettingsScreen: undefined;
};

const Stack = createStackNavigator<SettingsParamList>();
export const Settings = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      <Stack.Screen name="CommunityScreen" component={CommunityScreen} />
      <Stack.Screen
        name="WalletSettingsScreen"
        component={WalletSettingsScreen}
      />
      <Stack.Screen
        name="WriteSeedPhraseScreen"
        component={WriteSeedPhraseScreen}
      />
      <Stack.Screen
        name="SeedPhraseSuccessfulScreen"
        component={SeedPhraseSuccessfulScreen}
      />
      <Stack.Screen
        name="ChooseCurrencyScreen"
        component={ChooseCurrencyScreen}
      />
    </Stack.Navigator>
  );
};
