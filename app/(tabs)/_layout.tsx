import { Tabs } from "expo-router";
import React from "react";
import { TabBar } from "../components/TabBar";

export default function _layout() {
  return (
    <Tabs tabBar={(props) => <TabBar {...props} />}>
      <Tabs.Screen
        name="index"
        options={{ headerTitle: "home", tabBarLabel: "home" }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="tour"
        options={{ headerTitle: "tour", tabBarLabel: "tour" }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="add"
        options={{ headerTitle: "add", tabBarLabel: "add" }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="hotel"
        options={{ headerTitle: "hotel", tabBarLabel: "hotel" }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="flight"
        options={{ headerTitle: "flight", tabBarLabel: "flight" }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="profile"
        options={{ headerTitle: "profile", tabBarLabel: "profile" }}
      ></Tabs.Screen>
      {/* <Tabs.Screen
        name="profile"
        options={{
          headerTitle: "profile",
          tabBarLabel: "profile",
          headerShown: false,
        }}
      ></Tabs.Screen> */}
    </Tabs>
  );
}
