import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '../Global';

const Card = ({item}) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const handleItemClick = itemId => {
    setSelectedItem(item.key);
  };

  return (
    <TouchableOpacity
      style={[
        styles.card1,
        {
          backgroundColor:
            item.key == selectedItem ? colors.lightBlue : 'transparent',
        },
      ]}
      onPress={() => handleItemClick(item.key)}>
      <Text>{item.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card1: {
    flex: 1,
    margin: 5,
    padding: 15,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.lightBlue,
    justifyContent: 'space-around',
    width: 'auto',
  },
});

export default Card;
