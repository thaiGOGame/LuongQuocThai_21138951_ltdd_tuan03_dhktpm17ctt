import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, { useState } from 'react';

export default function App({ navigation }) {
  const [data, setData] = useState([
    {
      key: '1',
      type: 'Vegetable',
      name: 'Apple',
      price: '28.00',
      image: require('../assets/images/Image101.png'),
    },
    {
      key: '2',
      type: 'Vegetable',
      name: 'Pear',
      price: '28.00',
      image: require('../assets/images/Image102.png'),
    },
    {
      key: '3',
      type: 'Vegetable',
      name: 'Coconut',
      price: '28.00',
      image: require('../assets/images/Image103.png'),
    },
    {
      key: '4',
      type: 'Seafood',
      name: 'Seafood 1',
      price: '28.00',
      image: require('../assets/images/Image95.png'),
    },
    {
      key: '5',
      type: 'Seafood',
      name: 'Seafood 2',
      price: '28.00',
      image: require('../assets/images/Image95.png'),
    },
    {
      key: '6',
      type: 'Drink',
      name: 'Drink 1',
      price: '28.00',
      image: require('../assets/images/Image95.png'),
    },
    {
      key: '7',
      type: 'Drink',
      name: 'Drink 2',
      price: '28.00',
      image: require('../assets/images/Image96.png'),
    },
  ]);

  const [type, setType] = useState('Vegetable');
  const [selectedBtn, setSelectedBtn] = useState('Vegetable');
  const [initialItemCount, setInitialItemCount] = useState(6);

  return (
    <ScrollView stickyHeaderIndices={[0]}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: 'white',
        }}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
            alignItems: 'center',
            paddingHorizontal: 20,
            paddingVertical: 10,
            backgroundColor: 'white',
          }}
          onPress={() => {
            navigation.navigate('First Screen');
          }} // Đặt onPress tại đây
        >
          <Image
            source={require('../assets/images/Image183.png')}
            style={{ height: 25, width: 25 }}
          />
          <Text style={{ marginLeft: 10 }}>First Screen</Text>{' '}
          {/* Thêm text mô tả */}
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
            alignItems: 'center',
            paddingHorizontal: 20,
            paddingVertical: 10,
            backgroundColor: 'white',
          }}
          onPress={() => {
            navigation.navigate('Third Screen');
          }} // Đặt onPress tại đây
        >
          <Image
            source={require('../assets/images/Image182.png')}
            style={{ height: 25, width: 25 }}
          />
          <Text style={{ marginLeft: 10 }}>Third Screen</Text>{' '}
          {/* Thêm text mô tả */}
        </TouchableOpacity>
      </View>
      <View>
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 10,
            width: '90%',
            height: 50,
            alignSelf: 'center',
            marginTop: 20,
            paddingLeft: 20,
            fontSize: 20,
          }}
          placeholder="Search"
        />
      </View>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          marginTop: 20,
        }}>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            padding: 10,
            borderRadius: 40,
            backgroundColor: type == 'Vegetable' ? 'green' : 'white',
          }}
          onPress={() => {
            setType('Vegetable');
            setInitialItemCount(6);
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: 'blue',
            }}>
            Vegetable
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            borderWidth: 1,
            padding: 10,
            borderRadius: 40,
            backgroundColor: type == 'Seafood' ? 'green' : 'white',
          }}
          onPress={() => {
            setType('Seafood');
            setInitialItemCount(6);
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'blue',
            }}>
            Seafood
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            padding: 10,
            borderRadius: 40,
            backgroundColor: type == 'Drink' ? 'green' : 'white',
          }}
          onPress={() => {
            setType('Drink');
            setInitialItemCount(6);
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'blue',
            }}>
            Drink
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 20,
        }}>
        <Text style={{ fontSize: 25, color: 'green' }}>
          Order your favorite
        </Text>
        <TouchableOpacity
          onPress={() => {
            setInitialItemCount(data.length);
          }}>
          <Text style={{ fontSize: 25, color: 'pink' }}>See all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data
          .filter((item) => item.type == type)
          .slice(0, initialItemCount)}
        renderItem={({ item }) => (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: '45%',
              marginHorizontal: '2.5%',
              marginVertical: 10,
              padding: 15,
              backgroundColor: 'white',
              borderRadius: 10,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Third Screen')}>
              <Image
                source={item.image}
                style={{ width: 150, height: 150 }}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <Text
              style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
              {item.name}
            </Text>
          </View>
        )}
        numColumns={2}
      />
    </ScrollView>
  );
}
