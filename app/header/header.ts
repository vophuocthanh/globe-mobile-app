
import { StyleSheet } from 'react-native';

const stylesHeader = StyleSheet.create({
  container: {
    marginTop:10,
    marginLeft:8,
    marginRight:8,
    display: 'flex',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent:'space-between'
  },
  icon1: {
    marginRight: 8,
  },
  search:{
    width:200,
    height:38,
    borderRadius:12,
    backgroundColor:'white',
    marginLeft:5,
    marginRight:5,
    borderColor: 'gray',  
    borderWidth: 0.5, 
  }
  ,
  avatar:{

  },

  icon:{
  
    color:'black',
   
  },
  text:{
  marginTop:30,
  marginLeft:20
  },
  h1:{
  fontSize:30,
  width:260,
  fontWeight:'bold',
  },
  h3:{
  fontSize:20,

  },
  drawer:{
      position: "absolute",
      top: 50,
      left: 10,
      width: "55%",
      height: "204%",
      backgroundColor: "#D9D9D9",
      zIndex: 1000,
      borderRadius:20,
      
  },
  drawerItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft:20,
    height:40,
    marginTop:20,
    borderWidth: 1,         
    borderColor: "black"
  },
  FindTour:{
   position: "absolute",
   top:32,
   left:15 
  },
  FindFlight:{
   position: "absolute",
   top:34,
   left:15 
  },
  FindStays:{
   position: "absolute",
   top:34,
   left:15 
  },
  Advise:{
    position: "absolute",
    top:34,
    left:15 
  } ,
  activeItem: {
    backgroundColor: "#FF5733", 
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  inactiveItem: {
    backgroundColor: "white", 
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  LogOut:{
  position: "absolute",
  top:32,
  left:20,
  paddingLeft:30
  },
  avatarDrawer:{
    position: "absolute",
    top: 50,
    right: 10,
    width: "55%",
    height: "100%",
    backgroundColor: "#D9D9D9",
    zIndex: 1000,
    borderRadius:20,
  }
 
});

export default stylesHeader;
