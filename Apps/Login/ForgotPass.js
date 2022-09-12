import React, {useState,useEffect} from 'react';
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
import { images } from '../../contains';
import icons from '../../contains/icons';
import { isValidMatkhau, isValidTaikhoan } from '../../utilis/validations';


function ForgotPass(props) {
    const {navigation,rount}= props
    const {navigate, goBack}=navigation
    //State
  const [text, setChangeText] = useState('');

//Error
  const [errorTaikhoan, setErrorTaikhoan] = useState('');
  const [errorMatkhau, setErrorMatkhau] = useState('');

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
   <KeyboardAvoidingView  behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
   style={{flex:1}}>
     <ImageBackground
      source={images.background}
      style={{flex: 1}}>
        <View style={{height:'40%'}}/>
        <Text style={{fontSize:30, color:'white',alignSelf:"center",marginTop:20}}>Bạn Quên Mật Khẩu?</Text>
     <View style={{flexDirection: 'row', alignItems: 'center',justifyContent:'center',marginTop:30}}>
        <TextInput
          style={styles.StyleInput1}
          textAlign='center'
          onChangeText={text=>{ setErrorTaikhoan(
           isValidTaikhoan(text) == true ? '' : 'Tài khoản không đúng',
          );
          setChangeText(text);
        }}
          value={text}
          placeholder=" Nhập tài khoản"
          placeholderTextColor={'white'}
         
        />
      </View>
 {text==false? '' : (<Text style={{color: 'red', marginBottom: 5,alignSelf:'center'}}>{errorTaikhoan}</Text>)}

      <TouchableOpacity style={styles.TouchDN}>
        <Text style={{color: 'black', fontSize: 18}}>Quên mật khẩu</Text>
      </TouchableOpacity>
  <TouchableOpacity style={{height:40,width:150,alignSelf:'center'}}
      onPress={()=>goBack('Logins')}>
        <Text style={{fontSize:20, color:'#DDDDDD',alignSelf:'center',marginTop:10,}}>Đăng nhập lại</Text>
      </TouchableOpacity>
      
      <View style={{flexDirection: 'row',alignSelf:'center',marginTop:20,}}>
        <TouchableOpacity style={{}}>
          <Image source={icons.i}
          style={{tintColor:'white',width:50, height:50}} />
        </TouchableOpacity >
        <TouchableOpacity style={styles.TouchSupport}>
          <Image source={icons.support}
          style={{tintColor:'white',width:30, height:30,}} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.TouchShare}>
          <Image source={icons.share}
          style={{tintColor:'white',width:30, height:30,}} />
        </TouchableOpacity>
      </View>
    
    </ImageBackground>
   </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  StyleText: {
    marginRight: 20,
    fontWeight: 'bold',
    color: 'yellow',
    fontSize: 18,
  },
  StyleInput1: {
    height: 50,
    width: 350,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: 'white',
  },
 
  TouchDN: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 40,
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
  TouchSupport:{
    borderWidth:1,
    borderColor:'white',
    borderRadius:40, 
    width:40,
    height:40,
    marginHorizontal:20,
    justifyContent:'center',
    alignItems:'center'
},
    TouchShare:{
        borderWidth:1,
        borderRadius:20,
        borderColor:'white',
        width:40,
        height:40,
        justifyContent:'center',
        alignItems:'center'}
});
export default ForgotPass;
