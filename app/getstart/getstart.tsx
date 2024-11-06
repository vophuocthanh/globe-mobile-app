import { Image, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from 'react'
import styles from "./stylegetstart";
import start from "../../assets/images/start.png"
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { AntDesign } from "@expo/vector-icons";



export default function GetStart() {
    return (
        <View style={styles.container}>
            <View style={styles.skipContainer}>
                <Link href='/login/login' asChild>
                    <TouchableOpacity>
                        <Text style={[styles.headerTeaxt]}> Skip
                            <AntDesign name="right" size={24} color="black" />
                        </Text>
                    </TouchableOpacity>
                </Link>

            </View>
            <View style={styles.getContainer}>
                <View>
                    <Text style={styles.title}>
                        Get lost in the journey,
                    </Text>
                    <Text style={styles.title}>find yourself in the</Text>
                    <Text style={styles.title}>Adventure.</Text>
                </View>
                <Image
                    style={styles.image}
                    source={start}
                />
                <View style={styles.btn}>
                    <Link href='/getstart/adventures/adventures' asChild>
                        <TouchableOpacity>
                            <Text style={{ textAlign: "center" }} >GET STARTED</Text>
                        </TouchableOpacity>
                    </Link>
                </View>

                <View style={styles.header}>
                    <Text style={{ fontSize: 20 }}>Already have an account ?</Text>
                    <Link href='/login/login' asChild>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 20, color: "#00D38A" }} > Sign In</Text>
                        </TouchableOpacity>
                    </Link>
                </View>
            </View>
        </View>

    );
}



