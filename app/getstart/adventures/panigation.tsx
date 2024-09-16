
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native'
import React from 'react'
import IAdventures from './type'
import { interpolate, SharedValue, useAnimatedStyle } from 'react-native-reanimated'
import Dot from './dot'

type prop = {
    dataAdventures:IAdventures[],
    buttonVal: SharedValue<number>;
}
const styles =StyleSheet.create({
    panigation: {
        position: 'absolute',
        flexDirection: 'row',
        bottom:20,

    },
    dot: {
        height: 10,
        width: 10,
        backgroundColor: "#00D38A",
        textAlign: 'center',
        marginHorizontal: 5,
        borderRadius: 5

    }
}) 
const Panigation = ({dataAdventures,buttonVal}: prop) => {
    
    return (
        <View style={styles.panigation}>
            {
                dataAdventures.map((_,index) => {
                    return (
                        <Dot key={index} index={index} buttonVal={buttonVal} />
                    )
                })
            }
        </View>
    )
}
export default Panigation