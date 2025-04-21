
import React, {useState} from 'react';
import {SafeAreaView, Text, View}from 'react-native';
import MyText from './components/MyText/MyText';
import Item from './components/item/item';

const App = () => {

  const [originalText, setText]= useState('Hello, World!')

  return (
    <SafeAreaView>
      <View style={{backgroundColor:'blue', height:50}}>
        <Text>This is going to be our heade container</Text>
      </View>
      <View style={{backgroundColor: 'grey'}}>
        <MyText/>
        <MyText/>
        <MyText/>
      </View>
      <View>
        <Text>All rights reserved</Text>
      </View>
      <Item name={'table'} price={20}></Item>
      <Item name={'Chair'} price={100}></Item>
      <Item name={'Desk'} price={200}></Item>
      <View>
        <MyText></MyText>
      </View>
      <View>
        <Text
          onPress={()=>setText('Hello World, I learned how to change state!')}>
          {originalText}
        </Text>
      </View>
    </SafeAreaView>
    
  )

}

export default App;
