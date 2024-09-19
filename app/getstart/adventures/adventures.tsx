
import { Button, FlatList, Image, ImageBackground, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, useAnimatedValue, useWindowDimensions, View } from "react-native";
import React, { useRef, useState } from 'react'

import { Link } from "expo-router";
import Panigation from "./panigation";


const styles = StyleSheet.create({
    container: {
        width: "auto",
        flexDirection: "column"
        // flex: 1,
        // justifyContent: "center",
        // alignItems: "center"
    },
    header: {
        marginTop: 50,
        paddingHorizontal: 20,
        textAlign: "center",
    },
    title: {
        fontSize:40,
        fontWeight: 600,
        textAlign: "center",
        marginTop: 30,
        maxWidth: "90%"
    },
    text: {
        marginTop: 20,
        fontSize:20,
        color: "#6B7280",
        textAlign: "center",
        marginHorizontal: "19%"
    },
    button: {
        backgroundColor: "#00D38A",
        borderRadius: 20,
        padding: 20,
        marginTop: 50,
        marginHorizontal: 30
    }
})

import generated_1 from "../../../assets/images/generated-1.png"
import generated_2 from "../../../assets/images/generated-2.png"
import generated_3 from "../../../assets/images/generated-3.png"

import IAdventures from "./type";
import { useSharedValue, withTiming } from "react-native-reanimated";
const dataAdventures: IAdventures[] = [
    {
        id: 1,
        image: generated_1,
        title: "Jobs fill your pocket, Adventures fill your soul",
        text: "Travelling is the best way to learn new things, A person travels for both pleasure and knowledge. "
    },
    {
        id: 2,
        image: generated_2,
        title: "Live life with no excuses, Travel with no regret",
        text: "Travelling refers to a trip or a journey to some distant places. It usually refers to visiting more than one places."
    },{
        id: 3,
        image: generated_3,
        title: "The world within reach.          To Travel is to Live",
        text: " There is craving in every person to see the other faces of nature and to know the other people of the world. "
    }
]

const Slide = ({item}: { item: IAdventures }) => {
    
    return (
        <View style={{alignItems: 'center'}}>
            <Image  source={item.image} style={{height: "65%", width: "100%",borderBottomRightRadius: 80, borderBottomLeftRadius: 80}} resizeMode="stretch"  />
                <View >
                    <View style={{ alignItems: "center"}}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={[styles.text]}>{item.text}</Text>                 
                    </View>
                </View>
        </View>
    )
}
import {  useRouter } from 'expo-router';
export default function Adventures() {
    const [curentIndex, setCurentIndex ] = useState(0)
    const {height: SCREEN_HEIGHT} = useWindowDimensions();
    const buttonVal = useSharedValue(0)
    const router = useRouter();
    const handleNext = () => {
        if(curentIndex === dataAdventures.length -1){
            router.push('login/login')
            return
        }
        setCurentIndex(item => item + 1)
        buttonVal.value = withTiming(buttonVal.value + SCREEN_HEIGHT)
    }
    return (
        <View style={styles.container}>
            <View style={{flexDirection: "column"}} >
                {
                    dataAdventures.map((item,index)=> {
                        return (
                            curentIndex === index && <Slide key={index} item={item} />
                        )
                    })
                }
                <View style={{alignItems: "center"}}>
                    <Panigation dataAdventures={dataAdventures} buttonVal={buttonVal} />
                </View>
                <View style={styles.button}>
                        <TouchableOpacity onPress={handleNext} >
                                <Text style={{textAlign: "center",color: "#fff", fontSize: 20}} >NEXT</Text>
                        </TouchableOpacity>
                    </View>
            </View>
        </View>
    );
}

