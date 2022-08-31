import React from 'react'
import { Text, TouchableOpacity, View,  } from 'react-native'

type CustomButtonProps  ={
    label:string;
    colorCode:string;
    id:number;
}
const CustomButton: React.FC<CustomButtonProps> =({label, colorCode}) => {
    return (
        <View>
            <TouchableOpacity  
                style={{ height:40,
                        width:250,
                        backgroundColor:colorCode,
                        marginVertical:10,
                        justifyContent:'center',
                        alignItems:'center',
                        marginHorizontal:70,
                        borderRadius:14}}>
                <Text> {label}</Text>
            </TouchableOpacity>
        </View>
    )
}



export default CustomButton