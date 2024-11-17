import React, { useState } from "react";
import { LogOut, ArrowLeft } from "lucide-react-native";
import { View, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Avatar, Drawer } from "react-native-paper";
import { router } from "expo-router";

export default function HeaderCoach() {
  const [isAvatarDrawerOpen, setIsAvatarDrawerOpen] = useState(false);
  const [active, setActive] = useState("");

  const toggleDrawer = () => {
    router.push("/(tabs)/coach");
  };

  const toggleAvatarDrawer = () => {
    setIsAvatarDrawerOpen((prevState) => !prevState);
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ paddingBottom: 20 }}>
          {/* Header Section */}
          <View style={styles.container}>
            <ArrowLeft size={30} color="black" onPress={toggleDrawer} />

            <TouchableOpacity onPress={toggleAvatarDrawer}>
              <Avatar.Image
                style={styles.avatar}
                size={36}
                source={require("@/assets/images/Avatar.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Drawer for Avatar */}
      {isAvatarDrawerOpen && (
        <Drawer.Section style={styles.avatarDrawer}>
          <View>
            <Drawer.Item
              label="Log Out"
              active={active === "LogOut"}
              onPress={() => setActive("LogOut")}
              style={[
                styles.drawerItem,
                active === "LogOut" ? styles.activeItem : styles.inactiveItem,
              ]}
            />
            <LogOut size={16} color="black" style={styles.LogOut} />
          </View>
          <View>
            <Drawer.Item
              label="Password"
              active={active === "Password"}
              onPress={() => setActive("Password")}
              style={[
                styles.drawerItem,
                active === "Password" ? styles.activeItem : styles.inactiveItem,
              ]}
            />
          </View>
        </Drawer.Section>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginLeft: 4,
    marginRight: 4,
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
    width: 175,
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
    width: "65%",
    backgroundColor: "#D9D9D9",
    zIndex: 1000,
    borderRadius: 20,
    height: 160,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 2000,
  },
});
