import {
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Card from './Card';
import {Dropdown} from 'react-native-element-dropdown';
import {colors} from '../Global';

const Property = () => {
  const [value, setValue] = useState(null);
  const dropDownitems = [
    {label: '400', value: '400'},
    {label: '500', value: '500'},
    {label: '800', value: '800'},
  ];
  const dropDownitems1 = [
    {label: '400', value: '400'},
    {label: '500', value: '500'},
    {label: '600', value: '800'},
  ];
  const data = [
    {key: '1', text: 'Flat'},
    {key: '2', text: 'House/Villa'},
    {key: '3', text: 'Office'},
    {key: '4', text: 'Shop'},
  ];
  const dataBedroom = [
    {key: '1', text: '1BHK'},
    {key: '2', text: '2BHK'},
    {key: '3', text: '3BHK'},
    {key: '4', text: '4BHK'},
  ];

  return (
    <SafeAreaView style={{flex: 1, padding: 10}}>
      <Image
        source={require('../images/propertyTopImg.png')}
        style={styles.image}
      />
      <View>
        <Text style={styles.txt}>Locality/Landmark</Text>

        <TextInput
          style={{
            borderBottomColor: colors.black,
            borderBottomWidth: 1,
            width: '90%',
            margin: 10,
          }}
          placeholder="Search in a city, Locality at landmark"
        />
        <Text style={styles.txt}>Property Type</Text>
        <FlatList
          data={data}
          renderItem={({item}) => <Card item={item} isPoperty={true} />}
          keyExtractor={item => item.key}
          horizontal={true}
        />
        <Text style={styles.txt}>Budget</Text>

        <View style={{flexDirection: 'row'}}>
          <Dropdown
            style={styles.dropdown}
            data={dropDownitems}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Rs Min"
            searchPlaceholder="Search..."
            value={value}
            onChange={item => {
              setValue(item.value);
            }}
          />
          <Dropdown
            style={styles.dropdown}
            data={dropDownitems1}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Rs Max"
            searchPlaceholder="Search..."
            value={value}
            onChange={item => {
              setValue(item.value);
            }}
          />
        </View>
        <Text style={styles.txt}>Bedrooms</Text>
        <FlatList
          data={dataBedroom}
          renderItem={({item}) => <Card item={item} isPoperty={true} />}
          keyExtractor={item => item.key}
          horizontal={true}
        />
      </View>
    </SafeAreaView>
  );
};

export default Property;

const styles = StyleSheet.create({
  image: {
    resizeMode: 'cover',
    width: '100%',
    height: '30%',
    opacity: 1,
  },
  dropdown: {
    margin: 5,
    height: 20,
    borderColor: '#07B8F5',
    borderWidth: 1,
    width: '45%',
    borderRadius: 8,
    padding: 20,
  },
  txt: {
    margin: 10,
    color: colors.black,
    fontSize: 16,
  },
});
