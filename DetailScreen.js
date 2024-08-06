import React from 'react';
import { View, Text } from 'react-native';

const DetailScreen = ({ route }) => {
  const { item } = route.params;

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24 }}>{item.title}</Text>
      <Text style={{ marginTop: 20 }}>{item.description}</Text>
    </View>
  );
};

export default DetailScreen;
