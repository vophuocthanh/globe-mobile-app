import { Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Card } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from './flight'
export default function Flight() {
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
  const cardData = [
    {
      id: 1,
      image: require("../../assets/images/caray.png"),
      flight: "Cathay Pacific",
    },
    {
      id: 2,
      image: require("../../assets/images/quatar.png"),
      flight: "Qatar Airways",
    },
  ];
  return (
    <View>
      <View style={styles.title}>
        <Text style={styles.title2}>Flights</Text>
        <Text style={styles.title3}>
          Search Flights & Places Hire to our most popular destinations
        </Text>
      </View>
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
              <Text style={styles.flight}>{card.flight} </Text>
            </View>
          </Card>
        ))}
      </View>
    </View>
  );
}
