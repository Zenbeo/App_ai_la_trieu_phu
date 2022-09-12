
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import {  Settings, View } from "react-native";
import { HomeMain, Login } from "../Apps";
import ForgotPass from "../Apps/Login/ForgotPass";
import Information from "../Apps/Login/Informations";
import Registeri from "../Apps/Login/Registeri";
import Supports from "../Apps/Login/Supports";
import HomeStart from "../Apps/Question/HomeStart";
import Question1 from "../Apps/Question/Question1";
import Raitings from "../Apps/Question/Raitings";
import ASetting from "../Apps/Question/Settings";
import TouchMoney from "../Apps/Question/TouchMoney";
 const Stack = createNativeStackNavigator()
function Apps(props){
    return<NavigationContainer>
       <Stack.Navigator initialRouteName='HomeMain' screenOptions={{//gans manf chinhs
            headerShown: false //hiện nút back 
        }}>
            <Stack.Screen name={"HomeMain"} component={HomeMain}/>
            <Stack.Screen name={"Logins"} component={Login}/>
            <Stack.Screen name={"Registeri"} component={Registeri}/>
            <Stack.Screen name={"ForgotPass"} component={ForgotPass}/>
            <Stack.Screen name={"Supports"} component={Supports}/>
            <Stack.Screen name="HomeStart" component={HomeStart}/>
            <Stack.Screen name="TouchMoney" component={TouchMoney}/>
            <Stack.Screen name="Question1" component={Question1}/>
            <Stack.Screen name="ASettings" component={ASetting}/>
            <Stack.Screen name="Raitings" component={Raitings}/>
            <Stack.Screen name="Information" component={Information}/>
        </Stack.Navigator>
    </NavigationContainer>
}
export default Apps