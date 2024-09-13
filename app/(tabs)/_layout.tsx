import { Tabs } from "expo-router";
import React from "react";
import { TabBar } from "../components/TabBar";

export default function _layout() {
  return (
    <Tabs tabBar={props => <TabBar {...props} />}>
      <Tabs.Screen
        name="index"
        options={{ headerTitle: "home", tabBarLabel: "home" }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="favourite"
        options={{ headerTitle: "favourite", tabBarLabel: "favourite" }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="profile"
        options={{ headerTitle: "profile", tabBarLabel: "profile" }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="posts"
        options={{
          headerTitle: "Posts",
          tabBarLabel: "Posts",
          headerShown: false,
        }}
      ></Tabs.Screen>
    </Tabs>
  );
}
