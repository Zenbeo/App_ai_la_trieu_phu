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
  ScrollView,
} from 'react-native';
import {icons, images} from '../../contains';

function Supports(props) {
  const {navigation, rount}= props
  const {navigate,goBack}=navigation

  return (
   <ScrollView>
     <ImageBackground style={{flex: 1}} source={images.blue}>
      <TouchableOpacity style={{margin:5}} onPress={()=>goBack('HomeStart')}>
        <Image source={icons.back} style={{height:25, width:25, tintColor:'white'}}/>
      </TouchableOpacity>
    
      
      <View style={{padding: 10}}>
        <Text style={{fontSize: 25, fontWeight: 'bold', color: 'white'}}>
          Luật chơi
        </Text>
        <Text style={{color: 'red', fontSize: 18}}>Vòng chơi chính:</Text>
        <Text style={{color: 'white'}}>
          Người chơi phải trả lời 15 câu hỏi với cấp độ từ dễ đến khó với thời
          gian không giới hạn. Mỗi câu hỏi có một mức tiền thưởng, tăng dần theo
          thứ tự. Có ba mốc quan trọng là câu số 5 (mốc thứ nhất), câu số 10
          (mốc thứ hai) và câu số 15 (mốc "TRIỆU PHÚ"). Vượt qua tất cả các mốc
          này, họ chắc chắn có được số tiền thưởng tương ứng của các câu hỏi đó.
          Kể từ câu số 10 trở đi, mỗi khi người chơi trả lời đúng một câu hỏi,
          người dẫn chương trình sẽ ký một tấm séc cho người chơi có trị giá
          giải thưởng tương ứng với câu hỏi mà người chơi trả lời đúng. Người
          chơi có quyền chơi tiếp hoặc dừng cuộc chơi. Nếu dừng cuộc chơi, họ sẽ
          ra về với số tiền tương ứng với câu hỏi đã trả lời đúng gần nhất. Nếu
          chơi tiếp mà trả lời sai, cuộc chơi khép lại và người chơi nhận số
          tiền thưởng tương ứng với mốc quan trọng gần nhất. Nếu trả lời sai khi
          chưa qua câu số 5, người chơi sẽ không nhận được tiền thưởng. Trả lời
          đúng tất cả các câu hỏi, người chơi sẽ trở thành "TRIỆU PHÚ" và nhận
          được tiền thưởng tương ứng với câu hỏi cuối cùng.
        </Text>
      </View>

      <View style={{padding: 10}}>
        <Text style={{fontSize: 25, fontWeight: 'bold', color: 'white'}}>
          Các quyền trợ giúp
        </Text>
        <Text style={{color: 'red', fontSize: 18}}>50:50</Text>
        <Text style={{color: 'white'}}>
          Máy tính sẽ loại bỏ đi 2 phương án sai.
        </Text>
        <Text style={{color: 'red', fontSize: 18}}>
          Gọi điện thoại cho người thân
        </Text>
        <Text style={{color: 'white'}}>
          Người chơi liên lạc tới một trong số các số điện thoại đã đăng ký với
          chương trình từ trước và hỏi ý kiến của người ở đầu dây bên kia trong
          khoảng thời gian là 30 giây.
        </Text>
        <Text style={{color: 'red', fontSize: 18}}>
          Hỏi ý kiến người đồng hành
        </Text>
        <Text style={{color: 'white'}}>
          Người đồng hành cùng người chơi sẽ tham gia cùng trả lời câu hỏi hiện
          tại với người chơi chính. Quyền trợ giúp này thay thế cho quyền trợ
          giúp Hỏi ý kiến khán giả.
        </Text>
        <Text style={{color: 'red', fontSize: 18}}>
          Hỏi ý kiến những nhà thông thái
        </Text>
        <Text style={{color: 'white'}}>
          Mỗi số phát sóng sẽ có 2 nhà thông thái trợ giúp người chơi. 2 nhà
          thông thái sẽ ngồi trong một căn phòng bí mật ở hành lang trường quay
          và chỉ có 30 giây để trợ giúp cho người chơi mà không có một thiết bị
          hỗ trợ tra cứu nào. Điều này được thực hiện tương tự với quyền trợ
          giúp Three Wise Men (Ba vị vĩ nhân) được sử dụng tại một số quốc
          gia.Quyền trợ giúp này chỉ bắt đầu có hiệu lực từ câu hỏi số 6.
          Trước đó, 2 chuyên gia sẽ theo dõi diễn biến của người chơi trong 5
          câu hỏi đầu tiên và sau khi người chơi quyết định chọn quyền trợ giúp
          này thì sẽ được kết nối trở lại. Quyền trợ giúp này thay thế cho quyền
          trợ giúp Tổ tư vấn tại chỗ.
        </Text>
        <Text style={{color: 'red'}}>
        Dừng cuộc chơi
        </Text>
        <Text style={{color: 'white', fontSize: 18}}>
        Bạn dùng cuộc chơi để bảo toàn số tiền tại câu hỏi đó
        </Text>
      </View>
    </ImageBackground>
   </ScrollView>
  );
}
export default Supports;
