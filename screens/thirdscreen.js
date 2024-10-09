import { StyleSheet, Text, View, ScrollView, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
import React, { useState } from 'react';
export default function app({ navigation }) {
  const [data, setData] = useState([
    { key: '1', type: 'Vegetable', name: 'Apple', price: '28.00', image: require('../assets/images/Image101.png') },
    { key: '2', type: 'Vegetable', name: 'Pear', price: '28.00', image: require('../assets/images/Image102.png') },
    { key: '3', type: 'Vegetable', name: 'Coconut', price: '28.00', image: require('../assets/images/Image103.png') },

    { key: '4', type: 'Seafood', name: 'Seafood 1', price: '28.00', image: require('../assets/images/Image95.png') },
    { key: '5', type: 'Seafood', name: 'Seafood 2', price: '28.00', image: require('../assets/images/Image95.png') },

    { key: '6', type: 'Drink', name: 'Drink 1', price: '28.00', image: require('../assets/images/Image96.png') },
    { key: '7', type: 'Drink', name: 'Drink 2', price: '28.00', image: require('../assets/images/Image96.png') },
  ]);
  const [type, setType] = useState("Vegetable");
  const [selectedBtn, setSelectedBtn] = useState("Vegetable");
  const [soluong, setsoluong] = useState(1);
  return (
    <ScrollView stickyHeaderIndices={[0, 1]}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20, backgroundColor: 'white' }}>
        {/*Touchop navigate to Second Screen with image w 25 h 25 */}
        <TouchableOpacity onPress={() => navigation.navigate('Second Screen')}>
          <Image source={require('../assets/images/Image183.png')} style={{ width: 25, height: 25 }} />
        </TouchableOpacity>
      </View>
      {/* view justcon center height 50 paddingh 20, inside is text size 25 green bold My Basket*/}
      <View style={{ justifyContent: 'center', alignItems: 'center', height: 50, paddingHorizontal: 20, backgroundColor: 'white' }}>
        <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'green' }}>My Basket</Text>
      </View>
      <View>
        <FlatList data={((data.filter((item) => item.type == type)))}
          renderItem={({ item }) => (
            <View style={{ marginHorizontal: '2.5%', padding: 15, borderWidth: 1, flexDirection: 'row', alignItems: 'center' }}>
              <Image source={item.image} style={{ width: 70, height: 70, resizeMode: 'contain' }} />
              <View style={{ flex: 1, marginLeft: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.name}</Text>
                <Text style={{ fontSize: 16, color: 'gray' }}>Price: ${item.price}</Text>
                <View style = {{flexDirection:'row'}}>
                  {/*image with source require Image 180.png w 15 h 15 marginTop 10 */}
                  <Image source={require('../assets/images/Image180.png')} style={{ width: 15, height: 15, marginTop: 10 }} />
                  <Image source={require('../assets/images/Image180.png')} style={{ width: 15, height: 15, marginTop: 10 }} />
                  <Image source={require('../assets/images/Image180.png')} style={{ width: 15, height: 15, marginTop: 10 }} />
                  <Image source={require('../assets/images/Image180.png')} style={{ width: 15, height: 15, marginTop: 10 }} />
                  <Image source={require('../assets/images/Image180.png')} style={{ width: 15, height: 15, marginTop: 10 }} />
                </View>
                <View style = {{flexDirection:'row', marginLeft:140, alignItems:'center'}}>
                  {/*image with source require Image 180.png w 15 h 15 marginTop 10 */}
                  <Image source={require('../assets/images/Image176.png')} style={{ width: 15, height: 15, marginTop: 10 }} />
                  <Image source={require('../assets/images/Image175.png')} style={{ width: 15, height: 15, marginTop: 10 }} />
                </View>
                </View></View>
          )}/>
            {/*view with 2 text Total: and $320 */}
            <View style={{ flexDirection: 'row', justifyContent:'space-between', alignItems: 'center', padding: 20, backgroundColor: 'white' }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Total:</Text>
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'green' }}>$320</Text>
            </View>
            {/*a touchopa green value Paymen, onpress navigate Second Screen */}
            <TouchableOpacity style={{ backgroundColor: 'green', padding: 15, borderRadius: 10, marginBottom: 20 }} onPress={() => navigation.navigate('Second Screen')}>
              <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Paymen</Text>
            </TouchableOpacity>
            </View>
    </ScrollView>
  );

}