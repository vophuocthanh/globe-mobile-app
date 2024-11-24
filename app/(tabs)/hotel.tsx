import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Avatar, Button, Card, Drawer, Searchbar } from "react-native-paper";
import { BadgeDollarSign, BedDouble, Calendar, CircleHelp, LogOut, Menu, Plane, Ratio, Users } from 'lucide-react-native';
import { stylesHeader } from "../components/headerCSS";
import HotelCard from "../hotel/hotelCard";




export default function Hotel() {

  const [searchQuery, setSearchQuery] = useState('');
  const [isInfoVisible, setIsInfoVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAvatarOpen, setIsAvatarOpen] = useState(false)
  const [active, setActive] = useState("");
  const [selectedDot, setSelectedDot] = useState('Popular');

  const toggleAvatarDrawerMenu = () => {
    if (isAvatarOpen) {
      setIsAvatarOpen(false)
    }
    if (isInfoVisible) {
      setIsInfoVisible(false)
    }
    setIsMenuOpen(!isMenuOpen);

  };

  const toggleAvatar = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false)
    }
    if (isInfoVisible) {
      setIsInfoVisible(false)
    }
    setIsAvatarOpen(!isAvatarOpen);

  };

  const toggleInfoVisibility = () => {
    setIsInfoVisible(!isInfoVisible);
  };

  const [value, setValue] = React.useState('Popular');

  const [liked, setLiked] = useState(new Set());
  const handleHeartPress = (id: number) => {
    setLiked((prevLiked) => {
      const newLiked = new Set(prevLiked);
      if (newLiked.has(id)) {
        newLiked.delete(id);
      } else {
        newLiked.add(id);
      }
      return newLiked;
    });
  };

  const iconMap: { [key: string]: string } = {
    Popular: "fire",
    Lake: "water",
    Beach: "beach",
    Mountain: "flag-triangle",
  };

  const cardData = [
    {
      id: 1,
      image: require("../../assets/images/ImageHaNoi.png"),
      city: "Melbourne",
      country: "Australia",
      tour: "Tour - Flight - Hotel",
    },
    {
      id: 2,
      image: require("../../assets/images/ImagePlace.png"),
      city: "Paris",
      country: "France",
      tour: "Tour - Flight - Hotel",
    },
  ]

  // Tùy chỉnh màu nền cho các nút dựa vào giá trị đã chọn
  const getButtonStyle = (buttonValue: string) => ({
    borderColor: value === buttonValue ? '#FF5733' : '#cccccc',
    backgroundColor: value === buttonValue ? '#FF5733' : '#ffffff',
    color: value === buttonValue ? 'white' : 'black',
    borderWidth: 1,
    borderRadius: 5,
  });

  // Hàm để render các nút tùy chỉnh
  const renderButton = (buttonValue: string, dotValue: string, label: string, icon: string) => (
    <TouchableOpacity
      style={[styles.button, getButtonStyle(buttonValue)]}
      onPress={() => { setValue(buttonValue), setSelectedDot(dotValue) }}
    >
      <View style={styles.iconButton}>
        <Text style={{ color: getButtonStyle(buttonValue).color }}>{label}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderDot = (dotValue: string, buttonValue: string) => (
    <View style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: "center",
      alignItems: "center",
      marginTop: 10,
    }}>
      <TouchableOpacity onPress={() => { setSelectedDot(dotValue), setValue(buttonValue) }}>
        <View
          style={[
            {
              width: 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: 5,
            }, { backgroundColor: selectedDot === dotValue ? "#FF9680" : "#D3D3D3" },
          ]}
        />
      </TouchableOpacity>
    </View>
  )

  // Nội dung tương ứng với mỗi lựa chọn
  const renderContent = () => {
    switch (true) {
      case value === 'Popular' || selectedDot === 'Popular':
        return (
          <HotelCard horizontal={true} page={1} itemsPerPage={4} />
        );
      case value === 'Lake' || selectedDot === 'Lake':
        return (
          <HotelCard horizontal={true} page={2} itemsPerPage={4} />
        );
      case value === 'Beach' || selectedDot === 'Beach':
        return <Text style={styles.contentText}>Nội dung bãi biển</Text>;
      case value === 'Mountain' || selectedDot === 'Mountain':
        return <Text style={styles.contentText}>Nội dung núi</Text>;
      default:
        return null;
    }
  };


  return (
    <>
      <ScrollView>
        <View style={styles.container}>

          <View style={stylesHeader.headerContainer}>
            <Menu onPress={toggleAvatarDrawerMenu} />
            <Text style={stylesHeader.title}>Tên</Text>
            <TouchableOpacity onPress={toggleAvatar}>
              <Avatar.Image
                size={36}
                source={require("../../assets/images/Avatar.png")}
              />
            </TouchableOpacity>
          </View>

          {isMenuOpen && (
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

          {isAvatarOpen && (
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

          <View style={stylesHeader.searchContainer}>
            <Searchbar
              placeholder="Tìm kiếm"
              onChangeText={setSearchQuery}
              value={searchQuery}
              style={stylesHeader.searchbar}
              right={() => <Icon onPress={toggleInfoVisibility} name="table-of-contents" size={24} color="#000" />} // Example icon
            />
            <Button
              style={isInfoVisible ? { display: 'none' } : {

                marginTop: 5,
                backgroundColor: "#FF5733",
                width: 100,
              }}
              labelStyle={{ color: "white" }}
            >
              Search
            </Button>
          </View>
          {isInfoVisible && (
            <View style={{ paddingTop: 5 }}>
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

          <SafeAreaView style={styles.container}>
            <View style={styles.buttonContainer}>
              {renderButton('Popular', 'Popular', 'Popular', 'fire')}
              {renderButton('Lake', 'Lake', 'Lake', 'waves')}
              {renderButton('Beach', 'Beach', 'Beach', 'weather-sunset')}
              {renderButton('Mountain', 'Mountain', 'Mountain', 'terrain')}
            </View>
            <View style={styles.contentContainer}>
              {renderContent()}
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              {renderDot('Popular', 'Popular')}
              {renderDot('Lake', 'Lake')}
              {renderDot('Beach', 'Beach')}
              {renderDot('Mountain', 'Mountain')}
            </View>
          </SafeAreaView>

          <View>
            <View style={styles.title}>
              <Text style={styles.text}>Hotel hot</Text>
              <Icon name="fire" size={24} color="#FF9680" />
            </View>
            <View style={styles.card}>
              <HotelCard horizontal={false} star_number={5} numColumns={2} page={1} itemsPerPage={4} />
            </View>
          </View>

        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    paddingHorizontal: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    marginHorizontal: 1,
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  contentContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  contentText: {
    fontSize: 16,
    color: '#333',
  },
  scrollViewContent: {
    alignItems: "center",
  },
  icon: {
    marginRight: 5,
  },
  cardContainer: {
    marginVertical: 20,
    display: "flex",
    flexDirection: "row",
    gap: 20,

  },
  card: {
    alignItems: "center",
  },
  cardImage: {
    height: 120,
    width: 140,
    display: "flex",
    paddingTop: 8,
  },
  iconButton: {
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },

  cardContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
  },
  city: {
    paddingTop: 4,
    fontSize: 17,
    fontWeight: "bold",
  },
  country: {
    fontSize: 10,
    color: "gray",
  },
  tour: {
    fontSize: 10,
    color: "gray",
    paddingBottom: 4,
  },
  star: {
    position: "absolute",
    top: 15,
    left: 5,
    color: 'white'
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
    right: 1,
    position: 'absolute',
    top: 5,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  title: {
    flexDirection: 'row',          // Đặt các phần tử theo hàng ngang
    alignItems: 'center',          // Căn giữa theo chiều dọc
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 4,                // Khoảng cách giữa văn bản và biểu tượng
  },
})