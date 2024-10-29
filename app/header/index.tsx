import React, { useState } from "react";
import {
  BedDouble,
  CircleHelp,
  LogOut,
  Menu,
  Plane,
  Ratio,
  CalendarArrowUp,
  UserRoundPen,
} from "lucide-react-native";
import { View, Text, TouchableOpacity } from "react-native";
import stylesHeader from "./header";
import { Avatar, Searchbar, Drawer } from "react-native-paper";
interface HeaderProps {
  openDrawer?: () => void;
}
const Header: React.FC<HeaderProps> = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isAvatarDrawerOpen, setIsAvatarDrawerOpen] = useState(false);
  const [active, setActive] = useState("");

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const toggleAvatarDrawer = () => {
    setIsAvatarDrawerOpen(!isAvatarDrawerOpen);
    setIsDrawerOpen(false); // Đảm bảo drawer của menu không mở khi avatar mở
  };
  return (
    <View>
      <View style={stylesHeader.container}>
        <Menu size={30} color="black" onPress={toggleDrawer} />
        <Searchbar
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={stylesHeader.search}
        />
        <TouchableOpacity onPress={toggleAvatarDrawer}>
          <Avatar.Image
            style={stylesHeader.avatar}
            size={36}
            source={require("../../assets/images/Avatar.png")}
          />
        </TouchableOpacity>
      </View>

      <View style={stylesHeader.text}>
        <Text style={stylesHeader.h3}>Hi John ,</Text>
        <Text style={stylesHeader.h1}>Where do you wanna go?</Text>
      </View>
      {isDrawerOpen && (
        <Drawer.Section style={stylesHeader.drawer}>
          <View>
            <Drawer.Item
              label="Find Tour"
              active={active === "first"}
              onPress={() => setActive("first")}
              style={[
                stylesHeader.drawerItem,
                active === "first"
                  ? stylesHeader.activeItem
                  : stylesHeader.inactiveItem,
              ]}
            />
            <Ratio size={16} color="black" style={stylesHeader.FindTour} />
          </View>
          <View>
            <Drawer.Item
              label="Find Flight"
              active={active === "second"}
              onPress={() => setActive("second")}
              style={[
                stylesHeader.drawerItem,
                active === "second"
                  ? stylesHeader.activeItem
                  : stylesHeader.inactiveItem,
              ]}
            />
            <Plane size={16} color="black" style={stylesHeader.FindFlight} />
          </View>

          <View>
            <Drawer.Item
              label="Find Stays"
              active={active === "Third"}
              onPress={() => setActive("Third")}
              style={[
                stylesHeader.drawerItem,
                active === "Third"
                  ? stylesHeader.activeItem
                  : stylesHeader.inactiveItem,
              ]}
            />
            <BedDouble size={16} color="black" style={stylesHeader.FindStays} />
          </View>
          <View>
            <Drawer.Item
              label="Advise"
              active={active === "Four"}
              onPress={() => setActive("Four")}
              style={[
                stylesHeader.drawerItem,
                active === "Four"
                  ? stylesHeader.activeItem
                  : stylesHeader.inactiveItem,
              ]}
            />
            <CircleHelp size={16} color="black" style={stylesHeader.Advise} />
          </View>
        </Drawer.Section>
      )}

      {isAvatarDrawerOpen && (
        <Drawer.Section style={stylesHeader.avatarDrawer}>
          <View>
            <Drawer.Item
              label="LogOut"
              active={active === "LogOut"}
              onPress={() => setActive("LogOut")}
              style={[
                stylesHeader.drawerItem,
                active === "LogOut"
                  ? stylesHeader.activeItem
                  : stylesHeader.inactiveItem,
              ]}
            />
            <LogOut size={16} color="black" style={stylesHeader.LogOut} />
          </View>
          <View>
            <Drawer.Item
              label="Password"
              active={active === "Password"}
              onPress={() => setActive("Password")}
              style={[
                stylesHeader.drawerItem,
                active === "Password"
                  ? stylesHeader.activeItem
                  : stylesHeader.inactiveItem,
              ]}
            />
          </View>
        </Drawer.Section>
      )}
    </View>
  );
};
export default Header;
