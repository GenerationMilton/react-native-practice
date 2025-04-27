
import React,{useState} from 'react';
import {
  SafeAreaView, 
  Image, 
  TextInput, 
  Text, 
  ScrollView, 
  Pressable, 
  Switch
} from 'react-native';
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons"

const App = () => {

  //hook to manage image state
  const [imageSource, setImageSource] = useState({uri:"http://example.com"});
  //hook to manage input state
  const[textValue, setTextValue]= useState('');

  const[passwordValue, setpasswordValue]= useState('');
  //hook to manage input email
  const[email, setEmail]= useState('');

  //button component and input submission
  const [emailInput, setEmailInput]=useState('');
  const [password, setPassword] = useState('');

  //Switch hook
  const [shouldKeepLoggedIn, setShouldKeepLoggedIn] = useState(true);

  return (
    <SafeAreaView>
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
      <ScrollView>
        <TextInput 
        value={emailInput}
          keyboardType={'email-address'}
          style={{borderWidth:1, borderRadius: 4, padding: 10}}
          placeholder={'Please enter your email here'}
          onChangeText={value=>{
            setEmailInput(value);
          }}
        />
        <TextInput 
        value={password}
          secureTextEntry={true}
          style={{borderWidth:1, borderRadius: 4, padding: 10}}
          placeholder={'Please enter your password here'}
          onChangeText={valuer=>{
            setPassword(value);
          }}
        />
        <View style={{flex:1, flexDirection:'row', alignItems: 'center'}}>
          <Switch
            value={shouldKeepLoggedIn}
            onValueChange={value=> setShouldKeepLoggedIn(value)}
          />
          <Text>Keep me logged in</Text>
        </View>
        <Pressable 
          style={[{
            backgroundColor:'green'},
          (email.length ===0 || password.length<8 &&{opacity:0.5}),
          ]}
          disabled={email.length ===0 || password.length<8}
          onPress={()=>{
          concole.log('clicked')
          console.log(email, password, shouldKeepLoggedIn);
          }}
        ></Pressable>
        <View style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Text style={{color:'white', textAlign:'center', padding: 10}}>
              Submit
          </Text>
          <FontAwesomeIcon icon={faCheck} style={{color:'white'}}/>
        </View>
        <View style={{
            flex:1, 
            //backgroundColor: 'red', 
            flexDirection: 'column',
            justifyContent: 'space-between',
            //flex-start
            //center
            //flex-end
            //space-around
            alignItems: 'flex-start',
            //flex-end
            //center
            //stretch
            //baseline
          }}>
          <View style={{flex:1, backgroundColor: 'yellow', width: 50, height: 200}}></View>
          <View style={{flex:2, backgroundColor: 'green', width: 50, height: 200}}></View>
          <View style={{flex:3, backgroundColor: 'black', height: 200, with: 50}}></View>
        </View>
      </ScrollView>
  </SafeAreaView>
  );

};

export default App;
