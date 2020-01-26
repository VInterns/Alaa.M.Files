import React from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';

import Header from './components/Header'; // Import a component from another file
export default function App() {
  return (
    <View style={styles.container}>
      
      <Text> Vodafone InterShips Tasks.</Text>
      <Header />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => onChangeText(text)}
        
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function onChangeText(text) {
  alert(text);
}