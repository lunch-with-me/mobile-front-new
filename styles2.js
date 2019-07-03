import { StyleSheet } from "react-native";

 export const styles2 =StyleSheet.create({
    container: {
      flex:1,
      justifyContent:'center',
     
     // backgroundColor: '#aaaaaa',
      
      paddingBottom:20,
  
  
    },
    img:{
      width:50,
      height:100,
    },
    signupContainer:{
      width:"90%",
      height:"92%",
      marginTop:"6%",
      marginLeft:"4%",
      backgroundColor:'rgba(38,14,4,0.5)',
      paddingLeft:40,
      paddingRight:40,
      alignItems: 'center',
      borderRadius:15,
      paddingTop:"6%"
     
      
  },

  signInB:{
    backgroundColor:'#c97b63',
    width:120,
    height:40,
    borderRadius:15,
    marginTop:"12%",
    elevation:3,
    textAlign:"center"

  },
  signInBText:{
   color:"#ffffff",
    textAlign:"center",
    marginTop:10,
    fontWeight:"bold"

  },
  input :{
    borderColor:'#0000dd',
    backgroundColor:'rgba(240,208,193,0.5)' ,
    height:40,
    width:300,
    marginBottom:30,
    marginTop:10,
    color:'#000000',
    borderRadius:20,
    fontWeight:'bold',
    paddingLeft:20,
    
   
  },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom:20,
    fontStyle:'italic'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  para:{
    fontSize: 25,
   marginBottom:10,
    fontWeight:'bold',
    justifyContent:'flex-start',
    color:"#ffffff"

  },
  para2:{
    fontSize: 15,
    paddingLeft:20,
    fontWeight:'bold',
    color:"#ffffff"
   
  },
  para3:{
    fontSize: 15,
    paddingLeft:50, 
    marginLeft:20,
    fontWeight:'bold',
    color:"#ffffff"
   
  },
  para5:{
    fontSize: 15,
    paddingLeft:50, 
    marginLeft:20,
    fontWeight:'bold',
    color:"#ffffff"
   
  },
  condition:{
    flexDirection:"column",
  },
  para4  :{
    fontSize: 15,
    //paddingLeft:20,margin
    fontWeight:'bold', 
    fontStyle:"italic",
    color:"#efdcd5",
    marginLeft:0,

   
  },
  newAccount:{
    marginTop:10,
    //marginBottom:10,
  },
  //-------------------styles of modal-------------------
  modalContainer:{
   flex:1,
  padding:10,
   width:"70%",
   marginLeft:"15%",
   height:"60%",
   marginTop:"20%",
  marginBottom:"20%",
  backgroundColor:'#ffffff',
  alignItems:"center"

  },
  modalHeader:{
    width:"100%",
    height:"15%",
    marginTop:"20%",
    //borderColor:"#aaaaaa",
    borderBottomColor:"#aaaaaa",
    borderBottomWidth:1,
    borderStyle:"solid",
    //marginLeft:25,
   
  },
  modalFooter:{
    width:"100%",
    height:"6%",
    marginTop:"3%"
  },
  modelBody:{
    padding:25,
    height:"79%",
    elevation:5,
  },
  modalHeaderText:{
    fontWeight:"bold",
    fontSize:20,
    marginLeft:20,
  },
  AgreeB:{
    justifyContent:"flex-end",
    backgroundColor:"#c97b63",
    width:90,
    height:30,
    borderRadius:15,
    textAlign:"center",
    marginLeft:"50%",
  },
  
  });
  