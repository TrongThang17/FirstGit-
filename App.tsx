/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import CustomInput from './src/CustomInput';
import CustomButton from './src/CustomButton';

export  const orangeColor = '#E7421B';
const App = () => {
  const InputList =[
    {
      label:'Name',
      placeholder:'John Doe',
      isEmail:false,
      isPassword:false,
      
    },
    {
      label:'Mail',
      placeholder:'JoinDo@gmail.com',
      isEmail:true,
      isPassword:false,
    },
    {
      label:'Password',
      placeholder:'*******',
      isEmail:false,
      isPassword:true,
    },
    {
      label:'ReTypePassword',
      placeholder:'*******',
      isEmail:false,
      isPassword:false,

    }
  ]


  return (
    <SafeAreaView>
      <View style={{marginTop:50}}>
          <Text style={{
            textAlign:'center', 
            color:orangeColor,
            fontSize:22,
            fontWeight:'bold'
            }}>Join Active eCommerces</Text>
            <View style={{margin:20}}> 
            {
              InputList.map((input :{placeholder:string , label:string, isEmail:boolean, isPassword:boolean } , index:number) =>(
                <CustomInput  label={input.label} placeholder={input.placeholder} isEmail={input.isEmail} isPassword={input.isPassword} />
              ))
            }
             <CustomButton label={'Sign Up'}  colorCode={orangeColor} id={1} />     
             <CustomButton label={'Login'}  colorCode={'yellow'}  id={2}  />   
            </View>              
                                     
      </View>
        
    </SafeAreaView>
  );
};



export default App;
