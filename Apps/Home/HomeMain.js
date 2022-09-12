import React from "react";
import { ImageBackground, TouchableOpacity, View ,Text} from "react-native";
import { images } from "../../contains";
import Login from "../Login/Logins";
function HomeMain(props){
  const {navigation,rount}= props
  const {navigate, goBack}=navigation
  setTimeout(()=>{navigate('Logins')},3000)
    return(
      <ImageBackground source={images.backgroundStart} style={{flex:1}}>
        {/* <View style={{height:"70%"}}/>
      <View style={{  alignItems:'center',justifyContent:'center'}}>
      <TouchableOpacity style={{backgroundColor:'#003399',height:45, width:200, justifyContent:'center', alignItems:'center',borderRadius:30, shadowOffset: {width: -2, height: 4},  
    shadowColor: 'red',  
    shadowOpacity: 0.2,  
    shadowRadius: 3, }}>
            <Text style={{color:'white',fontSize:20}} >Start</Text>
        </TouchableOpacity>
      </View> */}

      </ImageBackground>
    )
}
export default HomeMain