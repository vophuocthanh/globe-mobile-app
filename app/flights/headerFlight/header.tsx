import React, { useState } from "react";
import { LogOut, ArrowLeft } from "lucide-react-native";
import { View, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Avatar, Drawer } from "react-native-paper";
import { router } from "expo-router";

export default function HeaderFlights() {
  const [isAvatarDrawerOpen, setIsAvatarDrawerOpen] = useState(false);
  const [active, setActive] = useState("");

  const toggleDrawer = () => {
    router.push("/(tabs)/flight");
  };

  const toggleAvatarDrawer = () => {
    setIsAvatarDrawerOpen(!isAvatarDrawerOpen);
  };

  return (
    <ScrollView>
      <View style={{ paddingBottom: 20 }}>
        {/* Header Section */}
        <View style={style.container}>
          <ArrowLeft size={30} color="black" onPress={toggleDrawer} />

          <TouchableOpacity onPress={toggleAvatarDrawer}>
            <Avatar.Image
              style={style.avatar}
              size={36}
              source={require("@/assets/images/Avatar.png")}
            />
          </TouchableOpacity>
        </View>

        {/* Drawer for Avatar */}
        {isAvatarDrawerOpen && (
          <Drawer.Section style={style.avatarDrawer}>
            <View>
              <Drawer.Item
                label="LogOut"
                active={active === "LogOut"}
                onPress={() => setActive("LogOut")}
                style={[
                  style.drawerItem,
                  active === "LogOut" ? style.activeItem : style.inactiveItem,
                ]}
              />
              <LogOut size={16} color="black" style={style.LogOut} />
            </View>
            <View>
              <Drawer.Item
                label="Password"
                active={active === "Password"}
                onPress={() => setActive("Password")}
                style={[
                  style.drawerItem,
                  active === "Password" ? style.activeItem : style.inactiveItem,
                ]}
              />
            </View>
          </Drawer.Section>
        )}
      </View>
    </ScrollView>
  );
}
const style = StyleSheet.create({
  container: {
    marginTop: 10,
    marginLeft: 8,
    marginRight: 8,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  avatar: {
    width: "100%",
  },
  drawerItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
    height: 40,
    marginTop: 20,
    borderWidth: 1,
    borderColor: "black",
  },

  activeItem: {
    backgroundColor: "#FF5733",
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  inactiveItem: {
    backgroundColor: "white",
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  LogOut: {
    position: "absolute",
    top: 32,
    left: 20,
    paddingLeft: 30,
  },
  avatarDrawer: {
    position: "absolute",
    top: 50,
    right: 10,
    width: "55%",
    height: "100%",
    backgroundColor: "#D9D9D9",
    zIndex: 1000,
    borderRadius: 20,
  },
});
