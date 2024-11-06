import { router } from "expo-router";
import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { Card } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

interface CardData {
  id: number;
  image: any;
  flight: string;
}

const FlightCard: React.FC = () => {
  const [liked, setLiked] = useState<Set<number>>(new Set());
  const [currentPage, setCurrentPage] = useState(0);
  const flatListRef = useRef<FlatList<any>>(null);

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
      image: require("../../../../../assets/images/caray.png"),
      flight: "Cathay Pacific",
    },
    {
      id: 2,
      image: require("../../../../../assets/images/quatar.png"),
      flight: "Qatar Airways",
    },
    {
      id: 3,
      image: require("../../../../../assets/images/caray.png"),
      flight: "Cathay Pacific",
    },
    {
      id: 4,
      image: require("../../../../../assets/images/quatar.png"),
      flight: "Qatar Airways",
    },
  ];

  const pages = [];
  for (let i = 0; i < cardData.length; i += 2) {
    pages.push(cardData.slice(i, i + 2));
  }

  // const handleNext = () => {
  //   if (currentPage < pages.length - 1) {
  //     const nextPage = currentPage + 1;
  //     flatListRef.current?.scrollToIndex({ index: nextPage });
  //     setCurrentPage(nextPage);
  //   }
  // };

  // const handlePrev = () => {
  //   if (currentPage > 0) {
  //     const prevPage = currentPage - 1;
  //     flatListRef.current?.scrollToIndex({ index: prevPage });
  //     setCurrentPage(prevPage);
  //   }
  // };

  const handleIndicatorPress = (index: number) => {
    flatListRef.current?.scrollToIndex({ index });
    setCurrentPage(index);
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={pages}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.pageContainer}>
            {item.map((card: CardData) => (
              <TouchableOpacity
                onPress={() =>
                  router.push("/flights/detailFlight/detail-flight")
                }
              >
                <Card key={card.id} style={styles.card}>
                  <Card.Cover source={card.image} style={styles.cardImage} />
                  <Text style={styles.star}>
                    <Icon name="star" color="#FF9680" /> 4.8
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
                    <Text style={styles.flight}>{card.flight}</Text>
                  </View>
                </Card>
              </TouchableOpacity>
            ))}
          </View>
        )}
        contentContainerStyle={styles.cardContainer}
      />

      {/* Phần dấu chấm */}
      <View style={styles.indicatorContainer}>
        {pages.map((_, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleIndicatorPress(index)}
          >
            <View
              style={[
                styles.indicator,
                {
                  backgroundColor:
                    currentPage === index ? "#FF9680" : "#D3D3D3",
                }, // Active là màu cam
              ]}
            />
          </TouchableOpacity>
        ))}
      </View>

      {/* Nút chuyển trang */}
      {/* <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={handlePrev}
          disabled={currentPage === 0}
        >
          <Text style={styles.buttonText}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={handleNext}
          disabled={currentPage === pages.length - 1}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  pageContainer: {
    flexDirection: "row",
  },
  cardContainer: {
    paddingLeft: 10,
  },
  card: {
    alignItems: "center",
    width: 160,
    marginRight: 15,
  },
  cardImage: {
    height: 120,
    width: 140,
    paddingTop: 8,
  },
  cardContent: {
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
    borderRadius: 50,
    width: 20,
    height: 20,
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
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor: "#D3D3D3", // Màu chấm mặc định
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  button: {
    padding: 10,
    backgroundColor: "#FF9680",
    borderRadius: 5,
    marginHorizontal: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default FlightCard;
