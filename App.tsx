import React, { useState } from 'react';
import Slider from './Slider'
import { View, Text, Dimensions } from 'react-native'


export default function App() {
  const [height, setHeight] = useState(0)
  const [width, setWidth] = useState(0)




  return (
    <View style={{ 
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center', 
      backgroundColor: '#000',
    }}>
      <Text style={{ 
          color: '#fff',
          marginTop: '40%',
          fontSize: 20
        }}>
          Height : {height}
        </Text>
      <Slider 
        type={'height'} 
        onChange={(val:number) => setHeight(val)}
      />

      <Text style={{ 
          color: '#fff',
          fontSize: 20
        }}>
          Width : {width}
        </Text>
      <Slider 
        type={'width'}
        onChange={(val:number) => setWidth(val)}
      />
    </View>
  );
}