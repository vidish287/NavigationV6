
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ContactStackNavigator, MainStackNavigator } from "./StackNavigation";


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="HomeTab" component={MainStackNavigator} />
      <Tab.Screen name="ContactTab" component={ContactStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;