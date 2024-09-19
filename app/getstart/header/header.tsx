
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from "@react-navigation/native";
import { Link } from "expo-router";


const style = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "#ccc",
        paddingHorizontal: 5,
        paddingVertical: 10,
        justifyContent: "flex-end",
        borderColor: "red",
        borderWidth: 1
    },
    headerTeaxt: {
        fontSize: 20,
        fontWeight:400,
        marginRight: 10,
        borderColor: "red",
        borderWidth: 1
    }
})
const Header = () => {
    return (
        <View style={style.container}>
            <Link href='login/login' asChild>
                <TouchableOpacity>
                <Text style={[style.headerTeaxt]}> Skip
                    <AntDesign name="right" size={24} color="black" />
                </Text>
                </TouchableOpacity>
            </Link>
            
        </View>
    )
}
export default Header