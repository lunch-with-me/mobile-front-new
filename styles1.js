import { StyleSheet } from "react-native";

/*export default class App extends React.Component {
    render() {
      return <AppContainer />;
    }*/ 
  export  const styles1= StyleSheet.create({
    textContainer:{
      color:'#000000',
      backgroundColor:'#b39ddb',
      width:300,
      height:45,
      borderRadius:20,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:20,
    
      
    },
    button2:{
      backgroundColor:'#af4448',
      width:120,
      height:35,
      shadowColor: 'rgba(255,255,255, .4)', // IOS
      shadowOffset: { height: 1, width: 1 }, // IOS
      shadowOpacity: 1, // IOS
      shadowRadius: 2, //IOS
      borderRadius:200,
      elevation: 2,
    },
    buttonText:{
      color:'#ffffff',
      textAlign:'center',
      paddingTop:10,
      fontWeight:"900",
      fontSize:15,
      paddingBottom:20,
      
    },
    loginContainer:{
      width:"100%",
      height:"100%",
      backgroundColor:"rgba(30,14,4,0.7)" ,
    },
    slider:{
      width:"100%",
      height:300,
    },
    con:{
      flexDirection:'row',
      marginTop:80,
      alignItems:'center',
      justifyContent:'center',
      
  
    },
    text:{
      color:'#ffffff',
      marginLeft:15,
      marginRight:20,
    },
    button:{
      backgroundColor:'#c97b63',
      width:120,
      height:35,
     elevation:5,
      borderRadius:200,
    },
  });
  