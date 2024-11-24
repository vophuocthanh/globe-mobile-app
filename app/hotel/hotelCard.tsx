import { useEffect, useState, useRef } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    ActivityIndicator,
} from "react-native";
import { Card } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { router } from "expo-router";
import axios from "axios";
import { Link } from "expo-router";




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
interface HotelCardProps {
    page: number;
    itemsPerPage: number;
    horizontal: boolean;
    numColumns?: number | 0;
    star_number?: number
}

const HotelCard: React.FC<HotelCardProps> = ({ page, itemsPerPage, horizontal, numColumns, star_number }) => {
    const [liked, setLiked] = useState<Set<string>>(new Set());
    const [Hotels, setHotels] = useState<CardData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const flatListRef = useRef<FlatList<any>>(null);

    useEffect(() => {
        const fetchHotelData = async () => {
            try {
                const response = await axios.get("http://localhost:3001/api/hotel-crawl/crawl", {
                    params: {
                        page,
                        items_per_page: itemsPerPage,
                        star_number: star_number
                    },
                });
                setHotels(response.data.data);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setLoading(false);
            }
        };
        fetchHotelData();
    }, [page, itemsPerPage, star_number]);



    const handleHeartPress = (id: string) => {
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

    const formatPriceToVND = (price: any) => {
        const priceString = String(price);
        const numberPrice = parseFloat(priceString.replace(/[^0-9.-]+/g, ""));
        return numberPrice.toLocaleString("vi-VN", {
            style: "currency",
            currency: "VND",
        });
    };

    const pages = [];
    for (let i = 0; i < Hotels.length; i += 1) {
        pages.push(Hotels.slice(i, i + 1));
    }


    if (loading) {
        return <ActivityIndicator size="large" color="#FF9680" />;
    }


    return (
        <View style={styles.container}>
            <FlatList
                ref={flatListRef}
                data={pages}
                numColumns={numColumns}
                horizontal={horizontal}
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => `page-${index}`}
                renderItem={({ item }) => (
                    <View style={styles.cardContainer}>
                        {item.length > 0 ? (
                            item.map((card: CardData) => (
                                <Card
                                    key={card.id}
                                    style={styles.card}
                                    onPress={() => { router.push(`/hotel/hotelDetail?id=${card.id}`) }}
                                >
                                    <Card.Cover
                                        source={{ uri: card.image }}
                                        style={styles.cardImage}
                                    />
                                    <Text style={styles.star}>
                                        <Icon name="star" color="#FF9680" />
                                        {card.star_number || 4.8}
                                    </Text>
                                    <Card.Content>
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
                                            <Text style={styles.city}>{card.hotel_names}</Text>
                                            <Text style={styles.country}>
                                                <Icon name="map-marker-outline" size={14} color="#FF9680" />
                                                {card.location}
                                            </Text>
                                            <Text style={styles.price}>
                                                {formatPriceToVND(card.price)}
                                            </Text>
                                        </View>
                                    </Card.Content>
                                </Card>
                            ))
                        ) : (
                            <Text>No cards available.</Text>
                        )}
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
    },
    cardContainer: {
        marginTop: 15
    },
    card: {
        alignItems: "center",
        width: 150,
        marginRight: 15,
        borderRadius: 12, // Các góc của thẻ mềm mại hơn
        backgroundColor: "#fff",

    },
    cardImage: {
        height: 130,
        width: 140,
        margin: 4,
    },
    cardContent: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 5,
    },
    star: {
        position: "absolute",
        bottom: 10,
        right: 7,
        fontSize: 12,
        color: "#FF9680", // Màu vàng sáng cho sao
    },
    heart: {
        backgroundColor: "rgba(135, 206, 250, 0.5)",
        borderRadius: 50,
        width: 30,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        right: 7,
        top: 10,
        transform: [{ scale: 1 }],
    },
    heartLiked: {
        backgroundColor: "#FF9680", // Khi thích thì có màu hồng
    },
    heartIcon: {
        color: "#fff",
        fontSize: 20,
    },
    city: {
        fontWeight: "bold",
        fontSize: 16,
        color: "#333",
        height: 40
    },
    country: {
        fontSize: 14,
        color: "#777",
        marginVertical: 4,
        height: 40
    },
    price: {
        fontSize: 14,
        color: "#FF9680",
        fontWeight: "bold", // Làm nổi bật giá tiền
        textAlign: "left",
    },
    indicatorContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
    indicator: {
        width: 12,
        height: 12,
        borderRadius: 6,
        marginHorizontal: 5,
        backgroundColor: "#D3D3D3",
    },
    indicatorActive: {
        backgroundColor: "#FF9680", // Màu sắc khi đang chọn
    },
});



export default HotelCard;
