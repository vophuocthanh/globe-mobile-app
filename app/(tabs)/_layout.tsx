import { Tabs } from "expo-router";
import React from "react";
import { TabBar } from "../components/TabBar";
import queryClient from "@/QueryClient";
export default function _layout() {
  return (
    <Tabs tabBar={(props) => <TabBar {...props} />}>
      <Tabs.Screen
        name="index"
        options={{ headerTitle: "home", tabBarLabel: "home" }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="book"
        options={{ headerTitle: "book", tabBarLabel: "book" }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="add"
        options={{ headerTitle: "add", tabBarLabel: "add" }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="like"
        options={{ headerTitle: "like", tabBarLabel: "like" }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="profile"
        options={{ headerTitle: "profile", tabBarLabel: "profile" }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="flight"
        options={{ headerTitle: "flight", tabBarLabel: "flight" }}
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
