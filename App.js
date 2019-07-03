import React from "react";
import { Button,View, Text ,ImageBackground,StatusBar,StyleSheet,TextInput,CheckBox,ScrollView,KeyboardAvoidingView
} from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { TouchableOpacity,  } from "react-native-gesture-handler";
import {styles1} from './styles1';
import {styles} from './styles';
import {styles2} from './styles2';
import  FBSDK,{LoginManager} from 'react-native-fbsdk';
import Modal from "react-native-modal";
// import console = require("console");

class HomeScreen extends React.Component {
  
  static navigationOptions = {
    header: null
}
  
  
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ImageBackground source={require('./Images/back.jpg')} style={{width: '100%', height: '100%'}}>
        <StatusBar backgroundColor="#a98274" barStyle="light-content" />
        <View style={styles1.loginContainer}>
        
        <ImageBackground source={require('./Images/slider2.jpeg')} style={styles1.slider}>
         <View style={styles1.textContainer}>
           <Text>connect with people...</Text>
         </View>
         
        </ImageBackground> 
        <View style={styles1.con}>

        <View > 
 
              <Text style={styles1.text}>Don't have an account?</Text>
                

              </View>
              <View>

              <TouchableOpacity
                    style={styles1.button}
                    onPress={() => this.props.navigation.navigate('SignUp')}
                  >
                    <Text style={styles1.buttonText} > Sign up </Text>
              </TouchableOpacity>

              </View>
              
        </View>
        <View style={styles1.con}>

<View > 

      <Text style={styles1.text}>Already have an account?</Text>
       

      </View>
      <View>

      <TouchableOpacity
            style={styles1.button2}
            onPress={() => this.props.navigation.navigate('Details')}
          >
            <Text style={styles1.buttonText} >Log in</Text>
      </TouchableOpacity>

      </View>
      
</View>
        
        
        
        </View>
        
        
     </ImageBackground>
      </View>
      
    );
  }
}
/*const styles1 = StyleSheet.create({
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
   
    borderRadius:200,
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
    backgroundColor:"rgba(30,14,4,0.7)",
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
   
    borderRadius:200,
  },
});*/

class DetailsScreen extends React.Component {
  //--------Log in-----------------------------------------------------------------------
  static navigationOptions = {
    header: null
}
  state = {username :"", password:""}
checkLogin(){

const  {username,password}=this.state 
console.log("in checkLogin Function "+ username+ " password "+ password)
// console.warn(username,password)o
this.onFetchLogin(username,password)
if (username =="admin" && password =="admin"){
  console.warn("log in succesfull!")
  alert("correct")
  this.props.navigation.navigate('form')
}


}


async onFetchLogin(username,password){
  console.log("in onFetchLogin");

  var data={
    email:"test@a.com",
    password:"abc"
  }
  try{
    let response=await fetch("http://192.168.56.1:3000/api/auth/login",
    {method:"POST",
  headers:{
    "X-Requested-width":"XMLHTTPRequest",
    "Content-Type":"application/json"
  
  },
  body:JSON.stringify(data)
})
//.then(res=>res.json())
//.then(responseJson=>this.dataHandler(responseJson),
.then(responseJson=>{
  console.log(responseJson.json())
},


)
    

  }catch(error){
    console.log(error)

  }
}

dataHandler(data){
  console.log("in datahandler ", data)
  // if(data =>{
  //   data.json()
  //   if
  // } ){
  //   alert("shgvxzhdjfcgh")
  // }
}
//---------Log in with facebook-----------------------------------------------------------


_fbAuth(){
  let success=0;
  LoginManager.logInWithReadPermissions(['public_profile','email']).then(function(result){
  
      if(result.isCancelled){
       console.log("Login was cancelled");
     
         
      }else{ 
        console.warn('Login was a success '+ result.grantedPermissions.toString());
        _part2();
       
      }
  
  },function(error){
   console.log("an error occured:"+error);

  })

 
 
    }
  
  
  
  
  //let x=function _part2(){
        
           //this.props.navigation.navigate('form')
        
   // }
  
 // -------------------------------------------------------------------------------------
  
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ImageBackground source={require('./Images/back.jpg')} style={{width: '100%', height: '100%'}}>
        
        <StatusBar backgroundColor="#a98274" barStyle="light-content" />
        <KeyboardAvoidingView behaviour="padding" enabled>
        <View style={styles.loginContainer}>
        
            <TextInput
              style={styles.input}
              placeholder="User Name ..."
              onChangeText={text =>this.setState({username : text})}
              placeholderTextColor="#efebe9"
                
              />
           
            <TextInput
              style={styles.input}
              placeholder="Password ..."
              secureTextEntry={true} 
              placeholderTextColor="#efebe9"
              onChangeText={text =>this.setState({password : text})}
              />
              <View style={styles.check}>
              <CheckBox style={styles.cBox}
                       checkedColor='rgba(240,208,193,0.6)'
                        />
                <Text style={{color:"#ffffff"}}>remember me</Text>
                <TouchableOpacity>
                 <Text style={{color:'rgba(240,208,193,0.9)' , marginLeft:40 , fontStyle:'italic'}}>Forgot Password</Text>
                </TouchableOpacity>
              </View>
             
              <TouchableOpacity
                    style={styles.button}
                    onPress={_=>this.checkLogin()}
                   
                  >
                    <Text style={styles.buttonText} > Log in </Text>
              </TouchableOpacity>
              <Text style={{color:"#ffffff",marginTop:40,}}>or Log in with</Text>
              <View style={styles.apiLogIn}>
                       <TouchableOpacity
                            style={styles.buttonFB}
                            onPress={_=>this._fbAuth()}
                          > 
                            <Text style={styles.buttonText} > facebook</Text>
                      </TouchableOpacity>
                     
                      <TouchableOpacity
                            style={styles.buttonL}
                            onPress={this.onPress}
                          >
                            <Text style={styles.buttonText} > LinkedIN </Text>
                      </TouchableOpacity>
              
                      </View>
        </View>
        <View style={styles.newAccount}>
        <Text style={{color:'#fffffb'}}>Don't have an account?</Text>
        <TouchableOpacity
        onPress={() => this.props.navigation.navigate('SignUp')}
                          >
        <Text style={{color:'#ffccbc',marginLeft:6,marginBottom:7}}>Sign Up</Text>
        </TouchableOpacity>
        </View> 
        </KeyboardAvoidingView>
        </ImageBackground>
      </View> 
        
        
      
    ); 
  }
}
/*
const styles = StyleSheet.create({
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
   marginTop:30,
  },
  buttonFB:{
    width:100,
    height:45,
    backgroundColor:'#3b5998',
    borderRadius:10,
    marginRight:30,
  },
  buttonL:{
    width:100,
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
    fontSize:15,
    paddingBottom:20,
    
  },
 
  loginContainer:{
      width:"90%",
      height:500,
      backgroundColor:'rgba(38,14,4,0.5)',
      paddingLeft:40,
      paddingRight:30, 
      alignItems: 'center',
      paddingTop:40,
      borderColor:'#c8b7b5',
      marginLeft:30,
      marginRight:30,
      marginTop:70,
      borderRadius:15
  },
  input :{
    borderColor:'#0000dd',
    backgroundColor:'rgba(240,208,193,0.35)' ,
    height:40,
    width:300,
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
});*/
class SignUpScreen extends React.Component {
  static navigationOptions = {
    header: null
}
state = {
  isModalVisible:false
};

toggleModal1 = () => {
  this.setState({ isModalVisible:true});
  
};
toggleModal2 = () => {
  this.setState({ isModalVisible:false});
};

  
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ImageBackground source={require('./Images/back.jpg')} style={{width: '100%', height: '100%'}}>
        <StatusBar backgroundColor="#a98274" barStyle="light-content" />
        <View style={styles2.loginContainer}>
        
        
        <View style={styles2.signupContainer}>

        <Text style={styles2.para}>Sign Up</Text>
        <Text style={styles2.para2}>Please fill in this form to create an account.</Text>
        
     
      <TextInput 
      style={styles2.input}
      placeholder="Enter Username"
      placeholderTextColor="#efebe9"
      />
        
      <TextInput 
      style={styles2.input}
      placeholder="Enter Email"
      placeholderTextColor="#efebe9"
      
      />
        
      <TextInput 
      style={styles2.input}
      placeholder="Enter Password"
      secureTextEntry={true}
      placeholderTextColor="#efebe9"
      />
        
      <TextInput 
      style={styles2.input}
      placeholder="Enter Password again"
      secureTextEntry={true}
      placeholderTextColor="#efebe9"
      />
      
      <View style={styles2.condition}>
        <Text style={{color:'#fffffb'}}>By creating an account you're agreeing to our</Text>
       
        <TouchableOpacity
       onPress={this.toggleModal1}
                          >
        <Text style={{color:'#ffccbc',marginBottom:7 ,textDecorationLine:"underline" ,fontStyle:"italic"}}> terms and Conditions.</Text>
        </TouchableOpacity>
        </View>

        <Modal isVisible={this.state.isModalVisible}
       
        >
          <View style={style=styles2.modalContainer}>
            <View style={styles2.modalHeader}>

                         <Text style={styles2.modalHeaderText}>Terms and Conditions</Text>

            </View>
           <View style={styles2.modelBody}>
                      <ScrollView>

                          
                                  <Text>
                                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                   when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                   It has survived not only five centuries,
                                   but also the leap into electronic typesetting, remaining essentially unchanged. 
                                   
                                
                                        Aenean egestas magna vitae turpis aliquet commodo.
                                        Vestibulum ut sapien nec nulla aliquam posuere.
                                        Nam sit amet tortor et ante egestas fringilla non eu lectus.
                                        Sed sed est ut nunc blandit luctus.
                                        Nullam et quam aliquet, ornare leo eget, blandit justo.
                                        Ut vulputate magna ac libero condimentum porta.
                                        Aenean accumsan sem ac est faucibus, ut aliquam neque ultrices.
                                        Vestibulum blandit lacus ac purus tempus, ut pretium tortor semper.
                                          Aenean in libero id elit gravida porta sit amet et nibh.
                                          Phasellus tincidunt urna sed dolor eleifend placerat.
                                          Nulla a justo ut magna consectetur lacinia.
                                          Sed cursus libero sit amet scelerisque scelerisque.
                                          Nunc accumsan purus ac varius lobortis.


                                  </Text>

                                  <View style={{backgroundColor:"#ffffff",width:"90%",height:30}}></View>
                                  <View style={{backgroundColor:"#ffffff",width:"90%",height:30}}></View>
                        

                        
                      </ScrollView>


           </View>
           <View style={styles2.modalFooter}>
           <Button title="I   Agree" onPress={this.toggleModal2} />
          
           

           </View>
            
          </View>
        </Modal>
               
        
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('Details')}
        style={styles2.signInB}             >
        <Text style={styles2.signInBText}>Sign Up</Text>
        </TouchableOpacity>
     
      </View>
              
        </View>

        <View style={styles.newAccount}>
        <Text style={{color:'#fffffb'}}>Already have an account?</Text>
        <TouchableOpacity
        onPress={() => this.props.navigation.navigate('Details')}
                          >
        <Text style={{color:'#ffccbc',marginLeft:6,marginBottom:7}}>Log in</Text>
        </TouchableOpacity>
        </View>
        
        
        
        
        
     </ImageBackground>
      </View>
      
    );
  }
}
/* const styles2 =StyleSheet.create({
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
    
    
    paddingLeft:40,
    paddingRight:40,
    alignItems: 'center',
   
    
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
  fontWeight:'bold'
 
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
  paddingLeft:30,
  fontWeight:'bold',
  justifyContent:'flex-start'
},
para2:{
  fontSize: 15,
  paddingLeft:20,
  fontWeight:'bold',
 
}
});*/

class FormOfInterests extends React.Component {
 
  static navigationOptions = {
    header: null
}
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ImageBackground source={require('./Images/back.jpg')} blurRadius={10} style={{width: '100%', height: '100%'}}>
        <StatusBar backgroundColor="#1b0000" barStyle="light-content" />
        
        <View style={styles3.Container}>
        <ImageBackground source={require('./Images/back.jpg')}  style={{width: '100%', height: '100%'}}>
        
        <View style={styles3.FormContainer1}>

        <View style={styles3.FormContainer11}>



        </View>


        <View style={styles3.FormContainer12}>
        <View style={styles3.FormContainer121}>


        </View>
        <View style={styles3.FormContainer122 }></View>

        </View>












        </View>


        </ImageBackground>


        </View>
        
     
      
              
        
        
        
        
        
        
     </ImageBackground>
      </View>
      
    );
  }
}
const styles3 = StyleSheet.create({
  Container:{
    
    backgroundColor:"rgba(40,24,14,0.7)",
    width:"100%",
    height:"100%",
    
    justifyContent: 'center',
    alignItems: 'center',
   
  
  
  },

  FormContainer1:{
    width:"96%",
    height:"100%",
    flex:2,
    flexDirection:"row",
    margin:15,
  },
  FormContainer11:{

    width:"35%",
    backgroundColor:"rgba(35,33,33,0.9)",
    


  },
  FormContainer12:{

   width:"65%",
   backgroundColor:"rgba(255,243,224,0.8)",
    flexDirection:"column",
    flex:2
  },
  FormContainer121:{
    width:"100%",
    height:"10%",
    backgroundColor:"rgba(176,79,72,0.7)",
   elevation:4,


  },
  FormContainer122:{
    width:"100%",
    height:"90%",
    
    


  },
});


const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    SignUp:SignUpScreen,
    form:FormOfInterests,
  },
  {
    initialRouteName: "Home"
  },
  {
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    },
  }
);

//export default createAppContainer(AppNavigator);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}