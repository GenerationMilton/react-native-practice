
import React, {useState, useEffect, useRef} from 'react';
import {Button, SafeAreaView, ScrollView, Text, View}from 'react-native';
import MyText from './components/MyText/MyText';
import Item from './components/item/item';
import { ThemeContext } from './contexts/ThemeContext';
import HomeScreen from './components/HomeScreeen/HomeScreen';
import useToggle from './customHooks/useToggle';

const App = () => {

  //UseState
  const [originalText, setText]= useState('Hello, World!')
  //UseEffect
  const [text, setText2]=useState(0);
  useEffect(()=>{
    console.log('The text has changed!')
  },[text]);
  useEffect(()=>{
    console.log('The component has rendered!')
  },[])

  //useRef
  let array = Array(10).fill(0);
  const scrollViewRef= useRef(null);

  const handleClick = () =>{
    scrollViewRef.current.scrollTo({x:0,Y:0,animated:true});
  }

  //useContext
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () =>{
      setIsDarkMode(!isDarkMode);
    }
  //custom Hooks
  const[isOn, toggleIsOn] = useToggle(false);
 
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
      <View>
        <Text
          onPress={()=>setText2(text+1)}>
          {text}
        </Text>
      </View>
      <View>
        <ScrollView ref={scrollViewRef}>
          {array.map((value, index)=>(
            <Text key={index}>Hello world! useRef{index}!</Text>
          )
          )}
        </ScrollView>
        <Button onPress={handleClick} title={'Scroll To Top'}/>
      </View>
      <ThemeContext.Provider value={isDarkMode}>
        <View style={{backgroundColor: isDarkMode?'#222222':'#ffffff'}}>
              <Text>Hello world!</Text>
              <Button title={'Switch Mode'} onPress={toggleTheme}></Button>
        </View>
        <HomeScreen/>
      </ThemeContext.Provider>
      <View>
          <Text>{isOn? 'ON': 'OFF'}</Text>
          <Button title={'Toggle'} onPress={toggleIsOn}/>
      </View>
    </SafeAreaView>
    
  )

}

export default App;
