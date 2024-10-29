import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Card } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function Hotel() {
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
      image: require("../../../../assets/images/quatar.png"),
      hotel: "Conrad",
      country: "Seoul, Korea",
    },
    {
      id: 2,
      image: require("../../../../assets/images/caray.png"),
      hotel: "Madikwe Safari",
      country: "South America",
    },
  ];
  return (
    <View>
      <View style={styles.title}>
        <Text style={styles.title2}>Hotel</Text>
        <Text style={styles.title3}>
          Search hotels & Places Hire to our most popular destinations
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
              <Text style={styles.flight}>{card.hotel} </Text>
              <Text style={styles.country}>
                <Icon name="map-marker-outline" size={14} color="#FF9680" />
                {card.country}
              </Text>
            </View>
          </Card>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    marginVertical: 20,
    display: "flex",
    flexDirection: "row",
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 100,
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
  flight: {
    paddingTop: 4,
    fontSize: 17,
    fontWeight: "bold",
    // paddingBottom: 30,
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

  star: {
    color: "white",
    position: "absolute",
    top: 10,
    left: 7,
    fontSize: 10,
  },
  title: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title2: {
    fontSize: 50,
  },
  title3: {
    textAlign: "center",
    fontWeight: "400",
  },
  country: {
    paddingBottom: 4,
  },
});
