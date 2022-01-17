import React from "react";
import BottomTabNavigator from "./TabNavigation";
import { ContactStackNavigator } from "./StackNavigation";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name="BottomTab" component={BottomTabNavigator} />
      <Drawer.Screen name="ContactDrawer" component={ContactStackNavigator} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;