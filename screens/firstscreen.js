import { Text, Image, StyleSheet, View, TouchableOpacity } from 'react-native';

export default function app({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order your favourite!</Text>
      <View style={styles.images}>
        <Image source={require('../assets/images/Drink.png')}  style={{marginLeft:150}}/>
        <Image source={require('../assets/images/Seafood.png')} style={{marginRight:150, marginTop:-50}}/>
        <Image source={require('../assets/images/Vegetable.png')}/>
        <TouchableOpacity style={styles.green_button} onPress = {()=>{navigation.navigate("Second Screen")}}>Get started</TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  title: {
    color: 'green',
    fontSize: 30,
    fontWeight: 'bold',
  },
  images: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  green_button:{
    backgroundColor: 'green',
    borderRadius: 10,
    color: 'white',
    textAlign: 'center',
    padding: 20,
  },
});