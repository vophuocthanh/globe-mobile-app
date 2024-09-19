import {StyleSheet} from 'react-native'
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      paddingHorizontal: 4,
    },
    scrollViewContent: {
      alignItems: "center",
    },
    horizontalScrollView: {
      flexGrow: 0,
    },
    buttonContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    button: {
      marginHorizontal: 5,
      borderRadius: 8,
      height: 40,
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 10,
      width: 78,
      justifyContent: "center",
    },
    buttonText: {
      fontSize: 10,
      marginLeft: 5,
      width: 80,
    },
    icon: {
      marginRight: 5,
    },
    cardContainer: {
      marginVertical: 20,
      display: "flex",
      flexDirection: "row",
      gap: 20,
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
    city: {
      paddingTop: 4,
      fontSize: 17,
      fontWeight: "bold",
    },
    country: {
      fontSize: 10,
      color: "gray",
    },
    tour: {
      fontSize: 10,
      color: "gray",
      paddingBottom: 4,
    },
    star: {
      color: "white",
      position: "absolute",
      top: 12,
      left: 7,
      fontSize: 10,
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
  });
  export default styles;