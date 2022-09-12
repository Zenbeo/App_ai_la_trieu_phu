
import React, { useState } from "react";
import { View,Text } from "react-native";
import YouTube from "react-native-youtube";


function Information(props){

    const [isReady, setIsReady] = useState(false);
  const [status, setStatus] = useState(null);
  const [quality, setQuality] = useState(null);
  const [error, setError] = useState(null);


    return(
        < View style={{justifyContent: "center"}}>
            <Text style={{fontSize:25, color:'black', alignSelf:'center'}}>Video giới thiệu</Text>
            <YouTube
            videoId={"m88R-A8g-l4"}
            fullscreen={true}
            loop={false}
            play={true}
            apiKey="AIzaSyCKzUM8BgI64YN5QGMgyT2VI3daspkR2KU"
            onReady={e => setIsReady(true)}
            onChangeState={e => setStatus(e.state)}
            onChangeQuality={e => setQuality(e.quality)}
            onError={e => setError(e.error)}
            style={{alignSelf: 'stretch', height: 300}}
            />
        </View>
    )
}
export default Information