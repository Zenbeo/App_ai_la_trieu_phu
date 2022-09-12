import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
  Alert,
} from 'react-native';
import CountDown from 'react-native-countdown-component';
import {icons, images} from '../../contains';
// import TouchMoney from './TouchMoney';

function Question1(props) {
  const {navigation, rount} = props;
  const {navigate, goBack} = navigation;

  const [select1, setSelect1] = useState();
  // const [select2, setSelect2]=useState('')
  // const [select3, setSelect3]=useState('')

  const [timerCount, setTimer] = useState(30);

  // useEffect(() => {
  //   let interval = setInterval(() => {
  //     setTimer(lastTimerCount => {
  //       lastTimerCount <= 1 && clearInterval(interval);
  //       return lastTimerCount - 1;
  //     });
  //   }, 1000); //each count lasts for a second
  //   //cleanup the interval on complete
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <ImageBackground
      style={{flexDirection: 'row', flex: 1}}
      source={images.blue}>
      {/* <TouchMoney /> */}
      <View style={{flex: 1}}>
        <View style={{height: 50, backgroundColor: '#33CCFF'}}>
          <Text style={{fontSize: 30, color: '#FFCC00', alignSelf: 'center'}}>
            $ 0
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity
            style={Style.hepl}
            onPress={() =>
              Alert.alert('Bạn muốn dừng cuộc chơi', 'vui lòng chọn ok', [
                {
                  text: 'ok',
                  onPress: () => navigate('HomeStart'),
                  style: 'cancel',
                },
              ])
            }>
            <Image
              style={{height: 40, width: 40, tinColors: 'blue'}}
              source={icons.hands}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={Style.hepl}
            onPress={() => {
              navigate('Question2');
            }}>
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
        <View
          style={{
            flexDirection: 'column',
            marginTop: 50,
            marginLeft: 10,
            marginLeft: 50,
          }}>
          <Text style={Style.TextSTT}>Câu 1</Text>
          {/* {timerCount === 0 ? (
            Alert.alert('Hết giờ', 'Mời bạn chơi lại', [
              {
                onPress: () => navigate('HomeStart'),
              },
            ])
          ) : (
            <Text style={Style.TextTime}>{timerCount}</Text>
          )} */}
          <CountDown
            until={30}
            size={12}
            timeToShow={'S'}
            onFinish={() =>
              Alert.alert('Hết giờ', 'Mời bạn chơi lại', [
                {
                  onPress: () => navigate('HomeStart'),
                },
              ])
            }
            digitStyle={{backgroundColor: 'white', marginRight: 18}}
            style={Style.TextTime}
            digitTxtStyle={{
              color: '#FF9900',
              backgroundColor: 'white',
              alignSelf: 'center',
              fontSize: 18,
            }}
            timeLabels={{s: null}}
          />
          <View style={Style.TextQuestion}>
            <Text style={{fontSize: 18, color: 'black'}}>
              sông nào dài nhất thế giới ?
            </Text>
          </View>
          <TouchableOpacity style={Style.TouchAnswer}>
            <Text>A. Sồng Hồng</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Style.TouchAnswer}>
            <Text>B. Sông Mê Công</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Style.TouchAnswer}>
            <Text>C. Sồng Tô Lịch</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Style.TouchAnswer}>
            <Text>D. Sông Nha</Text>
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
    width: 270,
    marginLeft: 10,
    marginRight: 5,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  TextSTT: {
    fontSize: 20,
    color: '#FF9900',
    borderWidth: 1,
    borderColor: '#FF9900',
    marginLeft: 10,
    marginTop: -15,
    backgroundColor: 'white',
    zIndex: 2,
    position: 'absolute',
    borderRadius: 15,
    fontWeight: 'bold',
    paddingLeft: 4,
    paddingRight: 2,
  },
  TextTime: {
    fontSize: 20,
    color: '#FF9900',
    borderWidth: 1,
    borderColor: '#FF9900',
    marginTop: -15,
    width: 50,
    backgroundColor: 'white',
    zIndex: 2,
    position: 'absolute',
    marginLeft: 240,
    borderRadius: 20,
    paddingLeft: 20,
  },
  TextQuestion: {
    borderWidth: 1,
    height: 200,
    width: 300,
    paddingLeft: 5,
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: '#D3D3D3',
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
    marginLeft: 20,
  },
});
export default Question1;
