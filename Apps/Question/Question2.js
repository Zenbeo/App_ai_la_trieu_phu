import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet,Image, ImageBackground} from 'react-native';
import {icons, images} from '../../contains';
import TouchMoney from './TouchMoney';

function Question2(props) {
  const [count, setCount] = useState(30);
  useEffect(() => {
    // 1 hàm luu
    setTimeout(() => {
      setCount(count => count - 1);
    }, 1000);
  }, [count]);
  return (
    <ImageBackground style={{flexDirection: 'row',  flex: 1}} source={images.blue}>
      <TouchMoney />
      <View style={{flex:1}}>
      <View style={{flexDirection:'row',marginTop:30,justifyContent:'space-around'}}>
    <TouchableOpacity style={Style.hepl1}>
        <Text style={{fontSize:15,color:'blue'}}>50:50</Text>
    </TouchableOpacity>
    <TouchableOpacity style={Style.hepl1}>
       <Image style={{height:40,width:40, tinColors:'blue'}} source={icons.people}/>
    </TouchableOpacity>
    <TouchableOpacity style={Style.hepl1}>
       <Image style={{height:40,width:40, tinColors:'blue'}} source={icons.phone}/>
    </TouchableOpacity>
        </View>
      <View style={{flexDirection: 'column', marginTop: 100, marginLeft: 10}}>
        <Text style={Style.TextSTT}>Câu 2</Text>
        <Text style={Style.TextTime}>0</Text>
        <View style={Style.TextQuestion}>
          <Text style={{fontSize: 18, color: 'black'}}>
            Trái đất có bao nhiêu đại dương ?
          </Text>
        </View>
        <TouchableOpacity style={Style.TouchAnswer}>
          <Text>A. 3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Style.TouchAnswer}>
          <Text>B. 4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Style.TouchAnswer}>
          <Text>C. 5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Style.TouchAnswer}>
          <Text>D. 6</Text>
        </TouchableOpacity>
        
      </View>
      </View>
    </ImageBackground>
  );
}
const Style = StyleSheet.create({
  TouchAnswer: {
    backgroundColor: '#FFFFCC',
    height: 40,
    width: 220,
    marginLeft: 10,
    marginRight: 5,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  TextSTT: {
    fontSize: 20,
    color: '#FF9900',
    borderWidth: 1,
    borderColor: '#FF9900',
    marginLeft: 10,
    marginTop: -15,
    backgroundColor: 'white',
    zIndex: 1,
    position: 'absolute',
    borderRadius: 15,
  },
  TextTime: {
    fontSize: 20,
    color: '#FF9900',
    borderWidth: 1,
    borderColor: '#FF9900',
    marginTop: -15,
    width: 50,
    backgroundColor: 'white',
    zIndex: 1,
    position: 'absolute',
    marginLeft: 180,
    borderRadius: 20,
    paddingLeft: 20,
  },
  TextQuestion: {
    borderWidth: 1,
    height: 200,
    width: 240,
    paddingLeft: 5,
    zIndex: -1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: '#D3D3D3',
  },
  hepl1:{
    height:50,
     width:50, 
     borderRadius:20, 
     borderWidth:2,
     backgroundColor:'white',
     borderColor:'blue',
     justifyContent:'center',
     alignItems:'center'},
     

});
export default Question2;
