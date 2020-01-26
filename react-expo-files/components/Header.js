import React, { Component } from 'react';

import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';
import { render } from 'react-dom';

const html= '<h1>hello HTML <h1>'

function Header() {

 
    return (

     
      <View>
        <Button
            title='"Click ME..."'
            onPress={() => Alert.alert('HAHAHAHAHAHAHAH')}
          />

        <Text>
          The title and onPress handler are required. It is recommended to set
          accessibilityLabel to help make your  app usable by everyone.
        </Text>
        

      </View>  
        
    );


  
}





export default Header;