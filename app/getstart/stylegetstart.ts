import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 32,
        paddingVertical: 80,
        backgroundColor: "#fff"
    },
    title: {
        marginBottom: 17,
        fontSize: 42,
        lineHeight:40,
        fontWeight:'700',
        textAlign: 'center'
    },
    image: {
        marginTop:20,
        width: "100%",
        height: "60%"
    },
    btn: {
        marginTop: 20,
        padding: 20,
        backgroundColor:"#00D38A",
        borderRadius: 20
    },
    header: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 30,
    }

})
export default styles;