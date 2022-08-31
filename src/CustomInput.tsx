import React from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'
import { orangeColor } from '../App';

interface CustomInputProps  {
    label:string;
    placeholder:string;
    isEmail?:boolean;
    isPassword:boolean;
}

const CustomInput: React.FC<CustomInputProps> =(props) =>{
  
    return (
        <View>
            <Text style={styles.text}>
                 {props.label}
            </Text>
            <TextInput 
                placeholder={props.placeholder}
                style={styles.textInput}/>

            {
                props.isEmail===true && <Text style={{textAlign:'right', color:orangeColor}}>Register With Phone Number</Text>
            }
            {
                props.isPassword===true && <Text style={{textAlign:'right'}}>Password must be at least 6 characters</Text>
            }
        </View>
        
    )
}


const styles = StyleSheet.create({
    text:{
        color: orangeColor,
        fontWeight:'bold',
        marginVertical:5

    },
    textInput:{
        borderWidth:0.5,
        borderColor:'grey',
        height:40,
        borderRadius:7
    }
})


export default CustomInput