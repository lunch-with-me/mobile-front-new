
import { StyleSheet } from "react-native";


 export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#aaaaaa',
    },
    newAccount:{
        flexDirection:'row',
        marginTop:5,
       
        justifyContent: 'center',
    },
    apiLogIn :{
      flexDirection:'row',
     // marginTop:20,
      //width:300,
      //marginRight:25,
      //marginLeft:25,
     // alignItems: 'center',
     marginTop:60,
    },
    buttonFB:{
      width:95,
      height:45,
      backgroundColor:'#3b5998',
      borderRadius:10,
      marginRight:30,
      elevation:6,
      justifyContent: 'center',
      shadowColor: 'rgba(255,255,255, .4)', 
    shadowOffset: { height: 1, width: 1 }, 
    },
    buttonL:{
      width:95,
      backgroundColor:'#0e76a8',
      borderRadius:10,
      height:45,
      marginLeft:30,
    },
  
    cBox:{
        borderColor:'#ffffff',
        
    },
    check:{
      flexDirection: 'row',
      alignItems:'flex-start',
      width:300,
      paddingLeft:10
  
    },
    button:{
      backgroundColor:'#c97b63',
      width:120,
      height:35,
      marginTop:30,
      borderRadius:200,
    },
    buttonText:{
      color:'#ffffff',
      textAlign:'center',
      paddingTop:10,
      fontWeight:"900",
      fontSize:12,
      paddingBottom:20,
      
    },
   
    loginContainer:{
        width:"90%",
        height:"90%",
        backgroundColor:"rgba(30,14,4,0.7)",
        paddingLeft:40,
        paddingRight:30,
        alignItems: 'center',
        justifyContent:"center",
        paddingTop:40,
        borderColor:'#c8b7b5',
       // marginLeft:30,
       // marginRight:30,
       marginLeft:"5%",
        marginTop:"8%",
        borderRadius:15
    },
    input :{
      borderColor:'#0000dd',
      backgroundColor:'rgba(240,208,193,0.35)' ,
      height:40,
      width:"96%",
      marginBottom:30,
      marginTop:10, 
      color:'#000000',
      borderRadius:20,
      paddingLeft:20,
      color:'#ffffff',
      
  
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      marginTop:20,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });