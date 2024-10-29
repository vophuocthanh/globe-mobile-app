import React, { useState } from "react";
import {
  BadgeDollarSign,
  BedDouble,
  Calendar,
  CircleHelp,
  LogOut,
  Menu,
  Plane,
  Ratio,
  TextSearch,
  Users,
} from "lucide-react-native";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Avatar, Searchbar, Drawer, Button, Card } from "react-native-paper";
import stylesHeader from "../header/header";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import TourCard from "../pages/home/tour/tourCard/tourCard";
import FlightCard from "../pages/home/flight/flightCard/flightCard";

const Flight: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isAvatarDrawerOpen, setIsAvatarDrawerOpen] = useState(false);
  const [active, setActive] = useState("");

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const toggleAvatarDrawer = () => {
    setIsAvatarDrawerOpen(!isAvatarDrawerOpen);
    setIsDrawerOpen(false);
  };
  const [isInfoVisible, setIsInfoVisible] = useState(false);

  const toggleInfoVisibility = () => {
    setIsInfoVisible(!isInfoVisible);
  };
  const [selected, setSelected] = useState(false);

  const handlePress = () => {
    setSelected(!selected);
  };

  return (
    <ScrollView>
      <View style={{ paddingBottom: 200 }}>
        {/* Header Section */}
        <View style={stylesHeader.container}>
          <Menu size={30} color="black" onPress={toggleDrawer} />

          <Text>Hi Join</Text>

          <TouchableOpacity onPress={toggleAvatarDrawer}>
            <Avatar.Image
              style={stylesHeader.avatar}
              size={36}
              source={require("../../assets/images/Avatar.png")}
            />
          </TouchableOpacity>
        </View>

        {/* Drawer for Menu */}
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
              <BedDouble
                size={16}
                color="black"
                style={stylesHeader.FindStays}
              />
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

        {/* Drawer for Avatar */}
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
        <View>
          <View style={{ marginHorizontal: 16, position: "relative",marginTop:15 }}>
            <Searchbar
              onChangeText={setSearchQuery}
              value={searchQuery}
              style={{
                backgroundColor: "#f0f0f0",
                borderRadius: 20,
                padding: 8,
                elevation: 2,
                borderColor: "black",
                borderWidth: 1,
                height: 50,
                marginBottom: 4,
              }}
            />
            <TouchableOpacity
              onPress={toggleInfoVisibility}
              style={{
                position: "absolute",
                right: 10,
                top: "50%",
                transform: [{ translateY: -10 }],
              }}
            >
              <TextSearch size={20} color={"black"} />
            </TouchableOpacity>
          </View>

          {isInfoVisible && (
            <View>
              <View
                style={{
                  backgroundColor: "#f0f0f0",
                  borderRadius: 20,
                  padding: 8,
                  marginHorizontal: 16,
                  elevation: 2,
                  borderColor: "black",
                  borderWidth: 1,
                  height: 50,
                  marginBottom: 4,
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Calendar
                  size={20}
                  color="black"
                  style={{ marginTop: 6, marginLeft: 10 }}
                />
                <Text style={{ marginTop: 6, marginLeft: 10 }}>
                  July 08 - July 15
                </Text>
              </View>

              <View
                style={{
                  backgroundColor: "#f0f0f0",
                  borderRadius: 20,
                  padding: 8,
                  marginHorizontal: 16,
                  elevation: 2,
                  borderColor: "black",
                  borderWidth: 1,
                  height: 50,
                  marginBottom: 4,
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <BadgeDollarSign
                  size={20}
                  color="black"
                  style={{ marginTop: 6, marginLeft: 10 }}
                />
                <Text style={{ marginTop: 6, marginLeft: 10 }}> 320$</Text>
              </View>

              <View
                style={{
                  backgroundColor: "#f0f0f0",
                  borderRadius: 20,
                  padding: 8,
                  marginHorizontal: 16,
                  elevation: 2,
                  borderColor: "black",
                  borderWidth: 1,
                  height: 50,
                  marginBottom: 4,
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Plane
                  size={20}
                  color="black"
                  style={{ marginTop: 6, marginLeft: 10 }}
                />
                <Text style={{ marginTop: 6, marginLeft: 10 }}>
                  Lahore - Karachi
                </Text>
              </View>

              <View
                style={{
                  backgroundColor: "#f0f0f0",
                  borderRadius: 20,
                  padding: 8,
                  marginHorizontal: 16,
                  elevation: 2,
                  borderColor: "black",
                  borderWidth: 1,
                  height: 50,
                  marginBottom: 4,
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Text style={{ marginTop: 6, marginLeft: 10 }}>Economy</Text>
              </View>

              <View
                style={{
                  backgroundColor: "#f0f0f0",
                  borderRadius: 20,
                  padding: 8,
                  marginHorizontal: 16,
                  elevation: 2,
                  borderColor: "black",
                  borderWidth: 1,
                  height: 50,
                  marginBottom: 4,
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Users
                  size={20}
                  color="black"
                  style={{ marginTop: 6, marginLeft: 10 }}
                />
                <Text style={{ marginTop: 6, marginLeft: 10 }}>2 Guests</Text>
                <Text style={{ marginLeft: 160, marginTop: 4, fontSize: 20 }}>
                  + | -
                </Text>
              </View>

              <View
                style={{
                  justifyContent: "center",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Button
                  style={{
                    backgroundColor: "#FF5733",
                    width: 100,
                  }}
                  labelStyle={{ color: "white" }}
                >
                  Search
                </Button>
              </View>
            </View>
          )}

          <View>
            <Button
              mode={selected ? "contained" : "outlined"}
              onPress={handlePress}
              style={[
                styles.button,
                {
                  backgroundColor: selected ? "#FF5733" : "#FFF",
                  borderWidth: selected ? 0 : 1,
                  width: 100,
                  height: 50,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: 5,
                },
              ]}
              labelStyle={[
                styles.buttonText,
                {
                  marginTop: 25,
                  width: 90,
                  height: 40,
                  color: selected ? "#FFF" : "#000",
                  fontSize: 14, // Thay đổi kích thước chữ tại đây
                },
              ]}
            >
              <Icon
                name={"fire"}
                size={20}
                color={selected ? "#FFF" : "#FF5733"}
                style={styles.icon}
              />
              Popular
            </Button>
            <FlightCard />
          </View>

          <View>
            <Button
              mode={selected ? "contained" : "outlined"}
              onPress={handlePress}
              style={[
                styles.button,
                {
                  backgroundColor: selected ? "#FF5733" : "#FFF",
                  borderWidth: selected ? 0 : 1,
                  width: 100,
                  height: 50,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: 5,
                },
              ]}
              labelStyle={[
                styles.buttonText,
                {
                  marginTop: 25,
                  width: 90,
                  height: 40,
                  color: selected ? "#FFF" : "#000",
                  fontSize: 14,
                },
              ]}
            >
              <Icon
                name={"fire"}
                size={20}
                color={selected ? "#FFF" : "#FF5733"}
                style={styles.icon}
              />
              Tour hots
            </Button>
            <TourCard />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  button: {
    marginVertical: 8,
    width: "100%",
    borderRadius: 20,
    padding: 10,
  },
  buttonText: {
    fontSize: 16,
  },
  icon: {
    marginRight: 8,
  },
  cardContainer: {
    marginVertical: 20,
    display: "flex",
    flexDirection: "row",
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    alignItems: "center",
    width: 160,
  },
  cardImage: {
    height: 120,
    width: 140,
    display: "flex",
    paddingTop: 8,
  },
  contentContainer: {
    marginVertical: 20,
    alignItems: "center",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
  },
  star: {
    color: "black",
    position: "absolute",
    bottom: 10,
    right: 7,
    fontSize: 10,
  },
  heart: {
    backgroundColor: "rgba(135, 206, 250, 0.5)",
    borderColor: "white",
    borderRadius: 50,
    width: 20,
    height: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 7,
    top: 10,
  },
  flight: {
    paddingTop: 4,
    fontSize: 17,
    fontWeight: "bold",
    paddingBottom: 30,
  },
});

export default Flight;
