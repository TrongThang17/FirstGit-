import React, {ReactNode} from 'react'
import {View, StyleSheet,Text, TouchableOpacity} from 'react-native'
import { ReactTestRendererNode } from 'react-test-renderer'
 
type labelPass ={
    label:string;
    coLor:string;
}

{/*const ForgetPass:React.FC = ({children}:{children?:ReactNode})=> {
    return(
        <View >
            <TouchableOpacity style={styles.container}>
                {children}
            </TouchableOpacity>
                
        </View>
    )
}*/}

const ForgetPass:React.FC<labelPass> = ({label, coLor})=> {
    return(
        <View >
            <TouchableOpacity style={{ height:40,
                                width:250,
                                backgroundColor:coLor,
                                marginVertical:10,
                                justifyContent:'center',
                                alignItems:'center',
                                marginHorizontal:70,
                                borderRadius:14}}>
                <Text>{label} </Text>
            </TouchableOpacity>
                
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
       
    }
})


export default ForgetPass