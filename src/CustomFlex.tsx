import React from 'react'
import PropTypes from 'prop-types'
import { View , StyleSheet} from 'react-native'

const CustomFlex =() =>{
    return (
        <View style={{flex:1, backgroundColor:'pink'}}>
            <View style={styles.custom}/>
            <View style={styles.custom}/>
            <View style={styles.custom}/>
            <View style={{flexDirection:'row'}}>
                <View style={styles.custom}/>
                <View style={styles.custom}/>
                <View style={styles.custom}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    custom:{
        height:100,
        width:100,
        backgroundColor:'blue',
        margin:10
    }
})

export default CustomFlex
