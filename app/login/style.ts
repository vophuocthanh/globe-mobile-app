import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 32,
        paddingVertical: 60,
    },
    title: {
        marginTop:80,
        marginBottom: 32,
        fontSize: 36,
        lineHeight:40,
        textAlign: 'center'
    },
    lable: {
        marginBottom: 80,
        fontSize: 24,
        lineHeight:32,
        textAlign: 'center',
        color: "#64748b"
    },
    input: {
        marginBottom: 32,
    },
    header: {
        flexDirection:'row',
        textAlign: 'center',
        alignItems:'center',
        justifyContent: 'space-between',
        marginBottom: 36,
    },
    checkbox: {
        flexDirection:'row',
        textAlign: 'center',
        alignItems:'center',
    },
    titleCheck: {
        textAlign: 'center',
        marginLeft: 16,
    },
    color: {
        color: "red"
    },
    button: {
        padding: 30,
        fontSize: 24,
        lineHeight:32,
        textAlign: "center",
        borderRadius: 24,
        backgroundColor:"#34d399",
    },
    account: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',
        marginTop: 32,
        marginBottom: 48,
        fontSize: 20,
        lineHeight: 28,
    },
    subtext: {
        textAlign: 'center',
        fontSize: 20,
        lineHeight: 28,
        color: "#9CA3AF"
    }

})
export default styles;