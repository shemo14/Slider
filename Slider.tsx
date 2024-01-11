import React, { useState } from 'react';
import HorizontalPicker from '@vseslav/react-native-horizontal-picker';
import { Text, View } from 'react-native';

const Slider = ({ type, onChange }: { type:string, onChange: any }) => {
    const [value, setValue] = useState(type == 'height' ? 31 : 0)
    let Items:Array<number> = [];

    if(type == 'height'){
      for (let index = 0; index < 10; index = index + 0.2) {
        Items.push(Math.round(index * 10) / 10);
      }
    }else {
      for (let index = 0; index <= 350; index = index + 5) {
        Items.push(index);
      }
    }

    const onChangeHandeler = (val:number) => {
      setValue(val)
      onChange(Items[val])
    }
    

    const rednerItem = (item, index) => {
        return (
          <View style={{ width: 60 }}>
            <Text style={{ 
              fontSize: index == value ? 30 : 20, 
              color:  index == value ? '#fff' : '#999', 
              textAlign: 'center',
              fontWeight: index == value ? "600" : "300"
            }}>
              { item }
            </Text>
            <View style={{ 
              width: index == value ? 5 : 2,
              height: index == value ? 50 : 30,
              backgroundColor: '#fff',
              marginTop: index == value ? 5 : 30,
              alignSelf: 'center',
              borderRadius: 3
             }} />
          </View>
        )
    };


    return (
      <HorizontalPicker
          style={{ alignSelf: 'center', marginVertical: 30 }}
          data={Items}
          renderItem={rednerItem}
          itemWidth={60}
          defaultIndex={value}
          onChange={val => onChangeHandeler(val)}
      />
    )

}

export default  Slider;