
import React from 'react';
import {SafeAreaView, Text, View}from 'react-native';

const App = () => {

  return (
    <SafeAreaView>
      <View 
        style={{
          borderWidth: 1, 
          borderTopWidth: 5,
          borderBottomWidth: 10,
          borderLeftWidth: 3,
          borderRightWidth: 20,
          borderColor: '#15099d',
          borderRadius: 10,
          borderTopLeftRadius: 20,
          borderBottomLeftRadius: 20,
          borderTopRightRadius: 30,
          borderBottomRightRadius: 30,

          }}>
        <Text>Hello World!</Text>
      </View>
    </SafeAreaView>
  )

}

export default App;
