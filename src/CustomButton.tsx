import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'


type CustomButtonProps  ={
    label:string;
    colorCode:string;
    onPress:(val:string) => void;
  
}
const CustomButton: React.FC<CustomButtonProps> =({label, colorCode, onPress}) => {
    return (
        <View>
            <TouchableOpacity  
                onPress={()=> onPress(label)}
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