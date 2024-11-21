import React, { useEffect, useState } from 'react';
import { View, ScrollView, Image, StyleSheet, Text, ActivityIndicator } from 'react-native';
import { Avatar, Button, IconButton, Card, Paragraph } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import AvatarTour from '../avatar/avatar';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import moment from "moment";
import { useLocalSearchParams, useRouter } from 'expo-router';
interface CardData {
    id: number;
    image: any;
    name: string,
    title: string,
    country: string,
    rating: number,
    price: number,
    start_date: string,
    end_date:string,
    trip_schedules:[
        {
        id: string,
        day: number,
        schedule: string,
        date: string
        }
    ],
}


export default function DetailTour() {
    const { id } = useLocalSearchParams();
    console.log(id,"id123");
    
    const [tourDetail, setTourDetail] = useState<CardData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    
    const fetchTourDetail = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/api/tour/${id}`);
            setTourDetail(response.data);
            setLoading(false);
        } catch (error) {
            console.error("Lỗi khi lấy dữ liệu chi tiết:", error);
            setLoading(false);
        } finally {
            setLoading(false);
        }
    };
    
    

    // Call API khi component được mount
    useEffect(() => {
        if (id) {
            fetchTourDetail();
        }
    }, [id]);

    if (loading) {
        return ;
    }
    const sortedSchedules = tourDetail?.trip_schedules.sort((a, b) => a.day - b.day);
return (
    <SafeAreaView>
        <ScrollView contentContainerStyle={styles.container}>
            {/* Header Image */}
            <View style={styles.headerAvatar}>
                <AvatarTour />
            </View>
            <Image source={{ uri: tourDetail?.image }} style={styles.headerImage} />


            {/* Tour Info */}
            <View style={styles.infoContainer}>
                <View style={styles.locationContainer}>
                <Text style={styles.locationTitle}>{tourDetail?.name}</Text>
                <IconButton icon="heart-outline"  size={24} />
                
                </View>

                {/* <Text style={styles.locationSubTitle}>{tourDetail?.name}</Text> */}

                <Text style={styles.price}>Price: {
                                    new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(tourDetail?.price)}</Text>
                <Text style={styles.date}>{moment(tourDetail?.start_date).format('DD/MM/YYYY') } - {moment(tourDetail?.end_date).format('DD/MM/YYYY') }</Text>

                {/* Ratings */}
                <View style={styles.ratingContainer}>
                <View style={styles.rating}>
                    <MaterialIcons name="star" size={16} color="orange" />
                    <Text>{tourDetail?.rating}</Text>
                </View>
                <View style={styles.rating}>
                    <MaterialIcons name="group" size={16} color="gray" />
                    <Text>3500+</Text>
                </View>
                <View style={styles.rating}>
                    <MaterialIcons name="date-range" size={16} color="gray" />
                    <Text>3 Days</Text>
                </View>
                </View>

                <Paragraph style={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu elementum...
                </Paragraph>

                {/* Map */}
                <Card style={styles.mapCard}>
                <Image
                    source={{ uri: 'https://example.com/map-image.jpg' }}
                    style={styles.mapImage}
                />
                </Card>

                {/* Time Line */}
                <Text style={styles.timelineTitle}>Lịch Trình</Text>
                {
                    sortedSchedules?.map((item) => (
                        <View style={styles.timeline}>
                
                            <Text>DAY {item.day}</Text>
                            <Paragraph>{item.schedule}</Paragraph>
                        </View>
                        
                    ))
                }

                {/* Book Button */}
                <Button mode="contained" style={styles.bookButton}>
                Book Tour
                </Button>
            </View>
        </ScrollView>
    </SafeAreaView>
);
};

const styles = StyleSheet.create({
container: {
    
},
headerAvatar: {
    zIndex: 1000,
},
headerImage: {
    zIndex: -1,
    width: '100%',
    height: 480,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
},
infoContainer: {
    marginTop: 16,
},
locationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
},
locationTitle: {
    width:'80%',
    fontSize: 24,
    fontWeight: 'bold',
},
locationSubTitle: {
    fontSize: 16,
    color: 'gray',
},
price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green',
},
date: {
    fontSize: 16,
    color: 'gray',
},
ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
},
rating: {
    flexDirection: 'row',
    alignItems: 'center',
},
description: {
    marginVertical: 10,
    color: 'gray',
},
mapCard: {
    marginVertical: 10,
},
mapImage: {
    width: '100%',
    height: 150,
},
timelineTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
},
timeline: {
    marginVertical: 10,
},
bookButton: {
    marginTop: 20,
    backgroundColor: '#FF6347',
},
});
