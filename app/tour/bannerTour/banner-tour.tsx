import {
    ScrollView,

    View,

} from "react-native";
import { Button } from "react-native-paper";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {StyleSheet} from 'react-native'

export default function BannerTour() {
    const [selected, setSelected] = React.useState("Popular");

    const handlePress = (value: string) => {
        setSelected(value);
    };
    const iconMap: { [key: string]: string } = {
        Popular: "fire",
        Lake: "water",
        Beach: "beach",
        Mountain: "flag-triangle",
    };
    
    return (
        <View style={styles.container}>
            <ScrollView
                horizontal
                contentContainerStyle={styles.buttonContainer}
                style={styles.horizontalScrollView}
                >
                {["Popular", "Lake", "Beach", "Mountain"].map((option) => (
                    <Button
                    key={option}
                    mode={selected === option ? "contained" : "outlined"}
                    onPress={() => handlePress(option)}
                    style={[
                        styles.button,
                        {
                        backgroundColor: selected === option ? "#FF5733" : "#FFF",
                        borderWidth: selected === option ? 0 : 1,
                        },
                    ]}
                    labelStyle={[
                        styles.buttonText,
                        { color: selected === option ? "#FFF" : "#000" },
                    ]}
                    >
                    <Icon
                        name={iconMap[option]} // Sử dụng ánh xạ icon
                        size={14}
                        color={selected === option ? "#FFF" : "#FF5733"}
                        style={styles.icon}
                    />
                    {option}
                    </Button>
                ))}
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        flexDirection: "row",
        justifyContent:"space-between",
    },
    horizontalScrollView: {
    flexGrow: 0,
    },
    buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    },
    button: {
    marginHorizontal: 5,
    borderRadius: 8,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    width: 78,
    justifyContent: "center",
    },
    buttonText: {
    fontSize: 10,
    marginLeft: 5,
    width: 80,
    },
    icon: {
    marginRight: 5,
    },



});