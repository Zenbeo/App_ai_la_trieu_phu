import React, {useState} from 'react';
import {
  ImageBackground,
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import {icons, images} from '../../contains';

function HomeStart(props) {
  const {navigation, rount} = props;
  const {navigate, goBack} = navigation;

  const [check, setCheck] = useState(true);
  return (
    <ImageBackground source={images.backgroundStart} style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 5,
        }}>
        <TouchableOpacity onPress={() => goBack('Logins')}>
          <Image
            source={icons.back}
            style={{height: 30, width: 30, tintColor: 'white'}}
          />
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={{marginRight: 15}}
            onPress={() => {
              setCheck(!check);
            }}>
            {check ? (
              <Image
                source={icons.sound}
                style={{height: 30, width: 30, tintColor: 'white'}}
              />
            ) : (
              <Image
                source={icons.nosound}
                style={{height: 30, width: 30, tintColor: 'white'}}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity style={{marginRight: 10}}  onPress={()=>navigate('ASetting')}>
            <Image
              source={icons.settings}
              style={{height: 30, width: 30, tintColor: 'white'}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{height: '45%'}} />
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity style={Style.TouchHome} onPress={()=>navigate('TouchMoney')}>
          <Text style={{color: 'white', fontSize: 25}}>CHƠI NGAY</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Style.TouchHome} onPress={()=>navigate('Supports')}>
          <Text style={{color: 'white', fontSize: 25}}>LUẬT CHƠI</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Style.TouchHome}>
          <Text style={{color: 'white', fontSize: 25}}>XẾP HẠNG</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
const Style = StyleSheet.create({
  TouchHome: {
    backgroundColor: '#3399FF',
    height: 50,
    width: 250,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginBottom: 15,
  },
});
export default HomeStart;
