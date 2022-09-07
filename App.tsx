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
  Alert,
  SafeAreaView,
  ScrollView,
  ScrollViewComponent,
  Text,
  View,
} from 'react-native';

import CustomInput from './src/CustomInput';
import CustomButton from './src/CustomButton';
import CustomFlex from './src/CustomFlex';
import CustomSectionList from './src/CustomSectionList';
import ForgetPass from './src/ForgetPass';
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

  const signUp= (label:string) =>{
    Alert.alert(label)
  }


  const login =(label:string) =>{
    Alert.alert(label)
  }


  return (
    <SafeAreaView> 
     <ScrollView style={{marginTop:50}}>
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
              <CustomButton label={'Sign Up'}  colorCode={'red'} onPress={(val:string)=>{signUp(val)}}/>     
              <CustomButton label={'Login'}  colorCode={'yellow'} onPress={(val:string)=>{login(val)}}  />  
              <ForgetPass label={'Forget'}  coLor={'green'}/>
              <ForgetPass label={'Forget'} coLor={'blue'}/>
              <ForgetPass label={'Forget'}  coLor={'brown'}/>
              <ForgetPass label={'Forget'}  coLor={'yellow'}/>
              <ForgetPass label={'Forget'}  coLor={'red'}/>
              <ForgetPass label={'Forget'}  coLor={'black'}/>

             

            </View>       
                  
             
          </ScrollView>
      
    </SafeAreaView>
  );
};



export default App;
