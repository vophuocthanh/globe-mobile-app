
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

  }
 
});

export default stylesHeader;
