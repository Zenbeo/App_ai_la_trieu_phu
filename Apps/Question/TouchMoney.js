import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground} from 'react-native';
import {icons, images} from '../../contains';

// const [count, setCount]= useState(0)

function TouchMoney(props) {
  const {navigation,rount}= props
  const {navigate, goBack}=navigation
  setTimeout(()=>{navigate('Question1')},2000)

  return (
    <ImageBackground style={{flex:1}} source={images.backgroundTouchMoney}>
      <View
        style={{
          flexDirection: 'row',         
        height:40,
        width:'100%',
        justifyContent:'space-around',
        alignItems:'center',
        paddingTop:40,
        paddingLeft:30
        }}>
          <TouchableOpacity style={Style.hepl} >
          <Image
            style={{height: 40, width: 40, tinColors: 'blue'}}
            source={icons.hands}
          />
          </TouchableOpacity>
        <TouchableOpacity style={Style.hepl}>
          <Text style={{fontSize: 15, color: 'black'}}>50:50</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Style.hepl}>
          <Image
            style={{height: 40, width: 40, tinColors: 'blue'}}
            source={icons.people}
          />
        </TouchableOpacity>
        <TouchableOpacity style={Style.hepl}>
          <Image
            style={{height: 40, width: 40, tinColors: 'blue'}}
            source={icons.phone}
          />
        </TouchableOpacity>
      </View>
      <View style={{marginLeft: 10, marginTop: 40, flexDirection: 'column'}}>
        <Text style={{fontSize: 30, color: '#FFCC00',}}>$ 0</Text>
        <View
          style={Style.ViewMoney}>
          <TouchableOpacity style={Style.TouchMoney}>
            <Text style={Style.TextMoneyMax}>$1.000.000</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Style.TouchMoney}>
            <Text style={Style.TextMoney}>$500.000</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Style.TouchMoney}>
            <Text style={Style.TextMoney}>$250.000</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Style.TouchMoney}>
            <Text style={Style.TextMoney}>$100.000</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Style.TouchMoney}>
            <Text style={Style.TextMoney}>$50.000</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Style.TouchMoney}>
            <Text style={Style.TextMoneyMax}>$25.000</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Style.TouchMoney}>
            <Text style={Style.TextMoney}>$20.000</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Style.TouchMoney}>
            <Text style={Style.TextMoney}>$16.000</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Style.TouchMoney}>
            <Text style={Style.TextMoney}>$8.000</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Style.TouchMoney}>
            <Text style={Style.TextMoney}>$4.000</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Style.TouchMoney}>
            <Text style={Style.TextMoneyMax}>$2.000</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Style.TouchMoney}>
            <Text style={Style.TextMoney}>$1.000</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Style.TouchMoney}>
            <Text style={Style.TextMoney}>$500</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Style.TouchMoney}>
            <Text style={Style.TextMoney}>$300</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Style.TouchMoney}>
            <Text style={Style.TextMoney}>$200</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Style.TouchMoney}>
            <Text style={Style.TextMoney}>$100</Text>
          </TouchableOpacity>
        </View>
      </View>
      
    </ImageBackground>
  );
}
const Style = StyleSheet.create({
  ViewMoney:{
    borderWidth: 2,
    borderColor: '#FF9900',
    height: 600,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  TouchMoney: {
    borderWidth: 2,
    height: 30,
    width: 120,
    borderRadius: 10,
    marginBottom: 5,
    backgroundColor: '#0099FF',
    borderColor: '#0099FF',
   
  },
  TextMoney: {
    alignSelf: 'center',
    color: '#FF9900',
    fontSize:15
  },
  TextMoneyMax: {
    alignSelf: 'center',
    color: 'red',
    fontSize:15
  },
  hepl: {
    height: 50,
    width: 50,
    borderRadius: 20,
    borderWidth: 2,
    backgroundColor: 'white',
    borderColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight:30,
   
  },
});
export default TouchMoney;
