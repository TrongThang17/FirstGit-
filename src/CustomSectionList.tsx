import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';
//https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Lenovo_G500s_laptop-2905.jpg/1280px-Lenovo_G500s_laptop-2905.jpg
const DATA = [
  {
    id: '1',
    images:'',
    title: 'First Item',
    cost:''
  },
  {
    id: '2',
    images:'',
    title: 'Second Item',
    cost:''
  },
  {
    id: '3',
    images:'',
    title: 'Third Item',
    cost:''
  }, 
  {
    id: '4',
    images:'',
    title: 'Forth Item',
    cost:''
  },
  {
    id: '5',
    images:'',
    title: 'Forth Item',
    cost:''
  },
  {
    id: '6',
    images:'',
    title: 'Forth Item',
    cost:''
  },
  {
    id: '7',
    images:'',
    title: 'Forth Item',
    cost:''
  },
  {
    id: '8',
    images:'',
    title: 'Forth Item',
    cost:'1000'
  },
];

const Item = (images:any, title:string, cost:string) => (
  <View style={styles.item}>
    <Image
      source={{uri:images}}
      style={{width:100,height:100}}
    />
    <Text style={styles.title}>{title}</Text>
    <Text style={{fontSize:20, color:'red'}}>{cost}</Text>
  </View>
);

const CustomSectionList = () => {
  const renderItem = ({ item }:{item:any}) => (
    <Item images={item.images} title={item.title} cost={item.cost}/>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    marginTop: StatusBar.currentHeight || 0,
    justifyContent:'center'
  },
  item: {
    backgroundColor: '#f9c2ff',
    width:150,
    height:150,
    marginVertical: 13,
    marginHorizontal: 24,
    alignItems:'center'
  },
  title: {
    fontSize: 12,
  },
});

export default CustomSectionList;