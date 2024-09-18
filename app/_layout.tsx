import { Stack, Tabs, useRouter } from "expo-router";
import React from "react";
import { Button } from "react-native";
import "../styles/global.css";

export default function _layout() {
  const router = useRouter();
  // dinh tuyen routing bang Stack
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "black",
        },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />

      <Stack.Screen
        name="register/index"
        options={{
          title: "Register",
          headerRight: () => (
            <Button
              title="Login"
              onPress={() => router.push("/login")}
            ></Button>
          ),
        }}
      />
      <Stack.Screen
        name="register/hello"
        options={{
          title: "Register",
          headerRight: () => (
            <Button
              title="Login"
              onPress={() => router.push("/login")}
            ></Button>
          ),
        }}
      />
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="[missing]"
        options={{
          title: "404",
        }}
      />
    </Stack>
  );
}
