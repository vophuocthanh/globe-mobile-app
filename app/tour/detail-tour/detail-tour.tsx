import React from 'react';
import { View, ScrollView, Image, StyleSheet, Text } from 'react-native';
import { Avatar, Button, IconButton, Card, Paragraph } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import AvatarTour from '../avatar/avatar';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function DetailTour() {
return (
    <SafeAreaView>
        <ScrollView contentContainerStyle={styles.container}>
            {/* Header Image */}
            <View style={styles.headerAvatar}>
                <AvatarTour />
            </View>
            <Image
                source={require("@/assets/images/generated-1.png")}
                style={styles.headerImage}
            />

            {/* Tour Info */}
            <View style={styles.infoContainer}>
                <View style={styles.locationContainer}>
                <Text style={styles.locationTitle}>Nusa Pedina</Text>
                <IconButton icon="heart-outline"  size={24} />
                
                </View>

                <Text style={styles.locationSubTitle}>Bali, Indonesia</Text>

                <Text style={styles.price}>$224</Text>
                <Text style={styles.date}>06 July - 09 July</Text>

                {/* Ratings */}
                <View style={styles.ratingContainer}>
                <View style={styles.rating}>
                    <MaterialIcons name="star" size={16} color="orange" />
                    <Text>4.5</Text>
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
                <Text style={styles.timelineTitle}>Time Line</Text>
                <View style={styles.timeline}>
                <Text>DAY 1</Text>
                <Paragraph>Transfer from Bali to Nusa Penida ransfer from Bali to Nusa Penida ransfer from Bali to Nusa Penidaransfer from Bali to Nusa Penidaransfer from Bali to Nusa Penida ransfer from  Visit Goa Giri Putri TempleVisit Goa Giri Putri TempleVisit Goa Giri Putri TemplevBali to Nusa Penida...</Paragraph>
                <Text>DAY 2</Text>
                <Paragraph>Explore Atuh Beach and Diamond Beach Explore Atuh Beach and Diamond Beach Explore Atuh Beach and Diamond BeachExplore Atuh Beach and Diamond BeachExplore Atuh Beach and Diamond BeachExplore Atuh Beach and Diamond BeachExplore Atuh Beach and Diamond Beach Explore Atuh Beach and Diamond BeachExplore Atuh Beach and Diamond BeachExplore Atuh Beach and Diamond Beach...</Paragraph>
                <Text>DAY 3</Text>
                <Paragraph> Visit Goa Giri Putri TempleVisit Goa Giri Putri TempleVisit Goa Giri Putri TempleVisit Goa Giri Putri TempleVisit Goa Giri Putri Temple Visit Goa Giri Putri Temple Visit Goa Giri PutVisit Goa Giri Putri TempleVisit Goa Giri Putri Templev Visit Goa Giri Putri Templeri TempleVisit Goa Gi Visit Goa Giri Putri Templeri Putri Temple Visit Goa Giri Putri Temple Visit Goa Giri Putri Temple ...</Paragraph>
                </View>

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
