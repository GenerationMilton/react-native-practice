
import React,{useState} from 'react';
import {SafeAreaView, Image, TextInput, Text, TextComponent, ScrollView} from 'react-native';

const App = () => {

  //hook to manage image state
  const [imageSource, setImageSource] = useState({uri:"http://example.com"});
  //hook to manage input state
  const[textValue, setTextValue]= useState('');

  const[passwordValue, setpasswordValue]= useState('');
  //hook to manage input email
  const[email, setEmail]= useState('');

  return<SafeAreaView>
      <Image 
      source={imageSource} 
      style={{width: 200,height:100, backgroundColor: 'red'}}
      resizeMode={'stretch'}//stretch //repeat //center
      onError={()=>{
        console.log("Error has been detected while loading an image")
        setImageSource(require("./assets/images/cake.png"))
      }}
    />
      <Image 
      source={{uri:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1089&q=80"}} 
      style={{width: 100,height:100}}
    />
    
    <TextInput 
      style={{borderWidth: 1, padding: 10, borderRadius: 4}}
      value={textValue}
      onChangeText={(value)=> {
        //console.log(value);
        setTextValue(value);
      }}
      autoFocus={true}
      placeholder={'Please enter your name'}
    />
     <TextInput 
      style={{borderWidth: 1, padding: 10, borderRadius: 4}}
      value={email}
      onChangeText={(value)=> {
        //console.log(value);
        setEmail(value);
      }}
      returnKeyType={'done'}//done //go //next
      keyboardType={'email-address'}
      autoFocus={true}
      placeholder={'Please enter your email'}
    />
    <TextInput 
      style={{borderWidth: 1, padding: 10, borderRadius: 4}}
      value={passwordValue}
      onChangeText={(value)=> {
        //console.log(value);
        setpasswordValue(value);
      }}
      keyboardType={'default'} //'numeric' //'phone-pad' //'default'
      secureTextEntry={true}
      autoFocus={true}
      placeholder={'Please enter your password'}
    />
    <ScrollView 
        onScroll={()=>{
          console.log('We are now scrolling');
        }}
        contentContainerStyle={{backgroundColor:'red', height: 600}}
        showsVerticalScrollIndicator={false}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
      <Image 
        source={require("./assets/images/cake.png")} 
        style={{height:500, width:500}}
      />
       <Image 
        source={require("./assets/images/cake.png")} 
        style={{height:500, width:500}}
      />
       <Image 
        source={require("./assets/images/cake.png")} 
        style={{height:500, width:500}}
      />
    </ScrollView>
  </SafeAreaView>

};

export default App;
