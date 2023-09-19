import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import Draggable from 'react-native-draggable';
import { colors } from '../Global';

const Main = ({navigation}) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [data, setData] = useState([
    {key: '1', text: 'Property', position: {x: 0, y: 0}},
    {key: '2', text: 'Land', position: {x: 180, y: 0}},
    {key: '3', text: 'Office', position: {x: 0, y: 120}},
    {key: '4', text: 'Hotel', position: {x: 180, y: 120}},
    {key: '5', text: 'Taxi', position: {x: 0, y: 240}},
    {key: '6', text: 'ServiceAppartment', position: {x: 180, y: 240}},
    {key: '7', text: 'DispatchRider', position: {x: 0, y: 360}},
    {key: '8', text: 'Personal Shopper', position: {x: 180, y: 360}},
    {key: '10', text: 'Tour Bus', position: {x: 0, y: 480}},
    {key: '11', text: 'Luxury', position: {x: 180, y: 480}},
  ]);

  const itemWidth = (Dimensions.get('window').width * 0.4) ;

  const handleDrag = (key, x, y) => {
    const updatedData = [...data];
    const itemIndex = updatedData.findIndex(item => item.key === key);
    updatedData[itemIndex].position = {x, y};
    setData(updatedData);
  };

  const handlePress = item => {
    if (item.text === 'Property') {
      navigation.navigate('Property');
    }
    setSelectedItem(item.key);
    console.log('Item pressed:', item.text);
  };
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={true}>
      <Image source={require('../images/topImg.png')} style={styles.image} />
      <View style={styles.itemContainer}>
      {data.map(item => (
        <Draggable
          key={item.key}
          x={item.position.x}
          y={item.position.y}
          onDrag={(event, gesture) =>
            handleDrag(item.key, gesture.moveX, gesture.moveY)
          }>
          <TouchableOpacity
            style={[
              styles.item,
             { width:itemWidth},
              {
                backgroundColor:
                  selectedItem === item.key ? colors.blue : colors.grey,
              },
            ]}
            onPress={() => handlePress(item)}>
            <Text style={{fontSize: 16, fontWeight: 400, color: colors.black}}>
              {item.text}
            </Text>
          </TouchableOpacity>
        </Draggable>
      ))}
      </View>
    </ScrollView>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
 
  scrollViewContent: {
    flexGrow: 1,
    paddingTop: '30%',
    paddingBottom:1000
  },
  itemContainer: {
    flexDirection: 'row',
      justifyContent: 'space-between',
   
  },
  item: {
    width:100,
    height: 100,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    padding: 10,
  },
  image: {
    height: '30%',
    resizeMode: 'cover',
    width: '100%',
  },
});

export default Main;
