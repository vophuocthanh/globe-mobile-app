import React, { useRef, useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    Dimensions,
} from "react-native";
import { Card } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const screenWidth = Dimensions.get("window").width;

interface CardData {
    id: number;
    image: any;
    tour: string;
}
const { width, height } = Dimensions.get('window');
const TravelTour2: React.FC = () => {
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
    image: require("@/assets/images/ImageHaNoi.png"),
    tour: "Amazing Thailand",
    },
    {
    id: 2,
    image: require("@/assets/images/caray.png"),
    tour: "Bali Adventure",
    },
    {
    id: 3,
    image: require("@/assets/images/generated-1.png"),
    tour: "Japan Explorer",
    },
    {
    id: 4,
    image: require("@/assets/images/generated-2.png"),
    tour: "Europe Escape",
    },
    {
    id: 5,
    image: require("@/assets/images/generated-1.png"),
    tour: "Japan Explorer",
    },
    {
    id: 6,
    image: require("@/assets/images/generated-2.png"),
    tour: "Europe Escape",
    },
    {
    id: 7,
    image: require("@/assets/images/generated-1.png"),
    tour: "Japan Explorer",
    },
    {
    id: 8,
    image: require("@/assets/images/generated-2.png"),
    tour: "Europe Escape",
    },
];

// Mỗi trang sẽ có 4 thẻ (2 trên, 2 dưới)
const pages = [];
for (let i = 0; i < cardData.length; i += 4) {
    pages.push(cardData.slice(i, i + 4));
}

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
            <View style={styles.rowContainer}>
            {item.slice(0, 2).map((card: CardData) => (
                <Card key={card.id} style={styles.card}>
                <Card.Cover source={card.image} style={styles.cardImage} />
                <Text style={styles.star}>
                    <Icon name="star" color="#FF9680" /> 4.9
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
                    <Text style={styles.tour}>{card.tour}</Text>
                </View>
                </Card>
            ))}
            </View>
            <View style={styles.rowContainer}>
            {item.slice(2).map((card: CardData) => (
                <Card key={card.id} style={styles.card}>
                <Card.Cover source={card.image} style={styles.cardImage} />
                <Text style={styles.star}>
                    <Icon name="star" color="#FF9680" /> 4.9
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
                    <Text style={styles.tour}>{card.tour}</Text>
                </View>
                </Card>
            ))}
            </View>
        </View>
        )}
        contentContainerStyle={styles.cardContainer}
        onScroll={(e) => {
        const offsetX = e.nativeEvent.contentOffset.x;
        const pageIndex = Math.round(offsetX / screenWidth);
        setCurrentPage(pageIndex);
        }}
    />

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
                },
            ]}
            />
        </TouchableOpacity>
        ))}
    </View>
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
    width: screenWidth,
    paddingBottom: 10,
},
rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
},
cardContainer: {
    paddingLeft: 10,
},
card: {
    alignItems: "center",
    width: 145,
    marginRight: 34,
    // paddingRight: 34,
},
cardImage: {
    width: width * 0.5, // Chiếm 50% chiều rộng màn hình
    height: height * 0.3, // Chiếm 30% chiều cao màn hình
},
cardContent: {
    alignItems: "center",
    gap: 2,
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
tour: {
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
    backgroundColor: "#D3D3D3",
},
});

export default TravelTour2;
