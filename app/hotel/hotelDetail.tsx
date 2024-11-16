import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Avatar, Button, Card, Drawer, Searchbar } from "react-native-paper";
import { BadgeDollarSign, BedDouble, Calendar, CircleHelp, Heart, LogOut, Menu, Plane, Ratio, Users } from 'lucide-react-native';
import { stylesHeader } from "@/app/components/headerCSS";
import axios from "axios";
import { RouteProp, useRoute } from "@react-navigation/native";


interface CardData {
    id: string;
    hotel_names?: string;
    location?: string;
    price?: number;
    score_hotels?: number;
    number_rating?: number;
    star_number?: number;
    description?: string;
    image?: string;
    isFavorite?: boolean;
}
type RootStackParamList = {
    Screen: { id: string };
};


export default function HotelDetail() {

    const [searchQuery, setSearchQuery] = useState('');
    const [isInfoVisible, setIsInfoVisible] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAvatarOpen, setIsAvatarOpen] = useState(false)
    const [active, setActive] = useState("");


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
    const [Hotels, setHotels] = useState<CardData>();
    //const [loading, setLoading] = useState<boolean>(true);
    const route = useRoute<RouteProp<RootStackParamList, 'Screen'>>();
    const { id } = route.params;
    useEffect(() => {
        const fetchHotelData = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/api/hotel-crawl/crawl/${id}`);
                setHotels(response.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchHotelData();
    }, [id]);
    console.log(id)
    return (
        <>
            <ScrollView>
                <View style={{
                    flex: 1,
                    backgroundColor: '#f8f9fa',
                    paddingHorizontal: 20,
                }}>

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

                    <View
                        style={{
                            backgroundColor: '#E3E8FD',
                            borderRadius: 15,
                            margin: 10,
                            elevation: 4,
                            width: 300,
                        }}
                    >
                        {/* Image Section */}
                        <View style={{ position: 'relative' }}>
                            <Card.Cover
                                source={{ uri: Hotels?.image }}
                                style={{
                                    width: '100%',
                                    height: 180,
                                    borderTopLeftRadius: 15,
                                    borderTopRightRadius: 15,
                                }}
                            />
                            <TouchableOpacity
                                style={{
                                    position: 'absolute',
                                    top: 10,
                                    right: 10,
                                    backgroundColor: 'white',
                                    borderRadius: 20,
                                    padding: 5,
                                    elevation: 2,
                                }}
                            >
                                <Heart size={20} color="#000" />
                            </TouchableOpacity>
                        </View>

                        {/* Hotel Info Section */}
                        <View style={{ padding: 15 }}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    marginBottom: 5,
                                }}
                            >
                                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Hyatt</Text>
                                <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#333' }}>
                                    22$
                                </Text>
                            </View>
                            <Text style={{ fontSize: 14, color: '#333', marginTop: 5 }}>
                                There is no other place like Bali in this world. A magical mix of
                                culture, people, nature, activities, weather, culinary delight...
                                <Text style={{ color: '#FF5733', fontWeight: 'bold' }}> Read More</Text>
                            </Text>
                        </View>
                    </View>

                </View>
            </ScrollView>
        </>
    );
}