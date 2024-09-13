import React from "react";
import { Menu } from "lucide-react-native";
import { View, Text } from "react-native";
import stylesHeader from "./header";
import { Avatar, Searchbar } from "react-native-paper";

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  return (
    <View>
      <View style={stylesHeader.container}>
        <Menu size={30} color="black" />
        <Searchbar
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={stylesHeader.search}
        />
        <Avatar.Image
          style={stylesHeader.avatar}
          size={36}
          source={require("../../assets/images/Avatar.png")}
        />
      </View>

      <View style={stylesHeader.text}>
        <Text style={stylesHeader.h3}>Hi John ,</Text>
        <Text style={stylesHeader.h1}>Where do you wanna go?</Text>
      </View>
    </View>
  );
};
export default Header;
