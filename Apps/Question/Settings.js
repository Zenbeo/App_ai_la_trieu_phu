import React from "react";
import { View,Text,TouchableOpacity } from "react-native";

function ASetting(props){
    const {navigation, rount }=props
    const {navigate,goBack}=navigation

    
    return(
<View style={{backgroundColor:'green',flex:1}}>
    <Text style={{fontSize:28,color:'white',}}>Setting</Text>
<TouchableOpacity style={{height:30,borderWidth:2 }} onPress={()=>goBack()}>
    <Text>Điểm cao nhất</Text>
</TouchableOpacity>
<TouchableOpacity style={{height:30,borderWidth:2 }}>
    <Text style={{fontSize:15,color:'black',}}>
        Đăng xuất
    </Text>
</TouchableOpacity>

</View>
    )
}
export default ASetting