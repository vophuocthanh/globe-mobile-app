import {StyleSheet} from 'react-native'
const styles = StyleSheet.create({
    cardContainer: {
      marginVertical: 20,
      display: "flex",
      flexDirection: "row",
      gap: 20,
      justifyContent: "center",
      alignItems: "center",
    },
    card: {
      alignItems: "center",
      width: 160,
    },
    cardImage: {
      height: 120,
      width: 140,
      display: "flex",
      paddingTop: 8,
    },
    contentContainer: {
      marginVertical: 20,
      alignItems: "center",
    },
    cardContent: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 8,
    },
    flight: {
      paddingTop: 4,
      fontSize: 17,
      fontWeight: "bold",
      paddingBottom: 30,
    },
    heart: {
      backgroundColor: "rgba(135, 206, 250, 0.5)",
      borderColor: "white",
      borderRadius: 50,
      width: 20,
      height: 20,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      right: 7,
      top: 10,
    },
  
    star: {
      color: "black",
      position: "absolute",
      bottom: 10,
      right: 7,
      fontSize: 10,
    },
    title:{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    title2:{
      fontSize:50
    },
    title3:{
      textAlign: "center",
      fontWeight:"400"
    }
  });
  export default styles;