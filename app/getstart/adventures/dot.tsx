

import { View, Text, StyleSheet, useWindowDimensions } from 'react-native'
import React from 'react'
import IAdventures from './type'
import Animated,{ Extrapolation, interpolate, SharedValue, useAnimatedStyle } from 'react-native-reanimated'

type prop = {
    index: number,
    buttonVal: SharedValue<number>;
}
const styles =StyleSheet.create({
    dot: {
        height: 10,
        width: 10,
        backgroundColor: "#00D38A",
        textAlign: 'center',
        marginHorizontal: 5,
        borderRadius: 5

    }
}) 
const Dot = ({index,buttonVal}: prop) => {
    const {height: SCREEN_HEIGHT} = useWindowDimensions();
    const animatedStyle  = useAnimatedStyle(() => {
        const widthAnimition = interpolate(
            buttonVal.value,
            [
                (index -1 ) * SCREEN_HEIGHT,
                (index) * SCREEN_HEIGHT,
                (index + 1) * SCREEN_HEIGHT
            ],
            [15,30,10],
            Extrapolation.CLAMP
        );
        return {
            width: widthAnimition
        }
    })
    
    return (
            <Animated.View style={[styles.dot,animatedStyle]} />
    )
}
export default Dot