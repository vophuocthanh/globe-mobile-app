import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    skipContainer: {
        flexDirection: "row",
        alignItems:'center',
        justifyContent: "flex-end",        
    },
    headerTeaxt: {
        fontSize: 20,
        fontWeight:400,
        marginRight: 10,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center'
    },
    container: {
        backgroundColor: "#fff"
    },
    getContainer: {
        marginBottom: 400
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
        marginBottom: 30
    }

})
export default styles;