import React, {useState, useEffect} from 'react';
import {
  View,
  ImageBackground,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import {images} from '../../contains';
import icons from '../../contains/icons';
import {isValidMatkhau, isValidTaikhoan} from '../../utilis/validations';

function Registeri(props) {
  const {navigation, rount} = props;
  const {navigate, goBack} = navigation;
  //State
  const [text, setChangeText] = useState('');
  const [number, setChangeNumber] = useState('');
  const [number1, setChangeNumber1] = useState('');
  //Error
  const [errorTaikhoan, setErrorTaikhoan] = useState('');
  const [errorMatkhau, setErrorMatkhau] = useState('');
  const [errorMatkhauk, setErrorMatkhauk] = useState('');

  const [keyboardIsShow, setKeyboardIsShow] = useState(false);
  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardIsShow(true);
    });
    Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardIsShow(false);
    });
  });
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <ImageBackground
        source={images.background}
        style={{
          flex: 1,
        }}>
        <TouchableOpacity
          style={{marginTop: 10}}
          onPress={() => goBack('Logins')}>
          <Image source={icons.back} style={{height: 25, width: 25}} />
        </TouchableOpacity>
        <View style={{flex: 25}}></View>

        <View
          style={{flex: 75, justifyContent: 'center', alignItems: 'center'}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.StyleText}>Tài khoản</Text>
            <TextInput
              style={styles.StyleInput1}
              onChangeText={text => {
              setErrorTaikhoan ( isValidTaikhoan(text) == true ? ' ' : 'Tài khoản không đúng')       
                setChangeText(text);
              }}
              value={text}
              placeholder=" Nhập tài khoản"
              placeholderTextColor={'white'}          
            />
          </View> 
      {text ==false ? '' :  (<Text style={{color: 'red', alignSelf: 'center', marginTop: 5,marginLeft:30,marginBottom:5}}>
            {errorTaikhoan}
          </Text>)}
          <View style={{flexDirection: 'row', alignItems: 'center',marginTop:10}}>
        <Text style={styles.StyleText}>Mật khẩu</Text>
        <TextInput
          style={styles.StyleInput2}
          onChangeText={number=>{   setErrorMatkhau(
            isValidMatkhau(text) == true
              ? '' : 'Mật khẩu phải điền trên 3 kí tự')
          setChangeNumber(number);
        }}
          value={number}
          placeholder="Nhập mật khẩu "
          secureTextEntry={true} //tính bảo mật ****
          placeholderTextColor={'white'}        
        />
      </View>
      {number==false ? '' : (<Text style={{color: 'red',alignSelf:'center',marginTop:5, marginLeft:90}}>{errorMatkhau}</Text>)}

          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.StyleText}>Nhập lại </Text>
              <Text style={styles.StyleText}>mật khẩu</Text>
            </View>
            <TextInput
              style={styles.StyleInput2}
              onChangeText={number1 => {
                setErrorMatkhauk(
                  isValidMatkhau(text) == true
                    ? ''
                    : 'Mật khẩu không đúng',
                );
                setChangeNumber1(number1);
              }}
              value={number1}
              placeholder=" Nhập mật khẩu "
              secureTextEntry={true} //tính bảo mật ****
              placeholderTextColor={'white'}
            />
          </View>
          {number1==false? '' :(<Text style={{color: 'red', alignSelf: 'center', marginTop: 5,marginLeft:30}}>
            {errorMatkhauk}
          </Text>)}

          <TouchableOpacity style={styles.TouchDN}>
            <Text style={{color: 'black', fontSize: 18}}>Đăng kí</Text>
          </TouchableOpacity>

          {keyboardIsShow == false ? (
            <View
              style={{
               
                flexDirection: 'row',
                alignSelf: 'center',
                marginTop: 20,
              }}>
              <TouchableOpacity>
                <Image
                  source={icons.i}
                  style={{tintColor: 'white', width: 50, height: 50}}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.TouchSupport}>
                <Image
                  source={icons.support}
                  style={{tintColor: 'white', width: 30, height: 30}}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.TouchShare}>
                <Image
                  source={icons.share}
                  style={{tintColor: 'white', width: 30, height: 30}}
                />
              </TouchableOpacity>
            </View>
          ) : (
            <View/>
          )}
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  StyleText: {
    marginRight: 20,
    marginLeft: 15,
    fontWeight: 'bold',
    color: 'yellow',
    fontSize: 18,
  },
  StyleInput1: {
    height: 50,
    width: 250,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: 'white',
  },
  StyleInput2: {
    height: 50,
    width: 250,
    borderWidth: 1,
    borderRadius: 30,
    marginLeft: 5,
    borderColor: 'white',
  },
  TouchDN: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderWidth: 1,
    backgroundColor: '#00CCCC',
    height: 50,
    width: 250,
    borderRadius: 30,
    borderColor: '#00CCCC',
  },
  Touch: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 10,
    borderWidth: 1,
    backgroundColor: '#0099CC',
    height: 50,
    width: 250,
    borderRadius: 30,
    borderColor: '#00CCCC',
  },
  TouchSupport: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 40,
    width: 40,
    height: 40,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TouchShare: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'white',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Registeri;
