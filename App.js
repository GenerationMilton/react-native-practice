
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
      <View 
        style={{
            backgroundColor: 'red',
            margin: 10,
            marginTop: 5,
            marginLeft: 100,
            marginRight: 100,
            marginBottom: 50,
             //more specific
            marginVertical: 50,
            marginHorizontal: 50,
            padding: 10,
            paddingTop: 100,
            paddingLeft: 100,
            paddingRight: 10,
            paddingBottom: 100,
            //more specific
            paddingHorizontal: 50,
            paddingVertical: 50,
          }}>
        <Text>Hello World2!</Text>
      </View>
    </SafeAreaView>
  )

}

export default App;
