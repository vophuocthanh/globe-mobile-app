import {
  ScrollView,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { Button, Card } from "react-native-paper";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./option";

export default function Option() {
  const [selected, setSelected] = React.useState("Popular");

  const handlePress = (value: string) => {
    setSelected(value);
  };
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
    // Thêm dữ liệu cho các thẻ khác nếu cần
  ];
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
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

        <View style={styles.cardContainer}>
          {cardData.map((card) => (
            <Card key={card.id} style={styles.card}>
              <Card.Cover source={card.image} style={styles.cardImage} />
              <Text style={styles.star}>
                <Icon name="star" color="#FF9680" />
                4.8
              </Text>
              <TouchableOpacity
                style={[
                  styles.heart,
                  {
                    backgroundColor: liked.has(card.id)
                      ? "#FF9680"
                      : "rgba(135, 206, 250, 0.5)",
                  },
                ]}
                onPress={() => handleHeartPress(card.id)}
              >
                <Icon
                  name="heart"
                  color={liked.has(card.id) ? "#FFF" : "#FF9680"}
                />
              </TouchableOpacity>
              <View style={styles.cardContent}>
                <Text style={styles.city}>{card.city} </Text>
                <Text style={styles.country}>
                  <Icon name="map-marker-outline" size={14} color="#FF9680" />
                  {card.country}
                </Text>
                <Text style={styles.tour}>{card.tour}</Text>
              </View>
            </Card>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
