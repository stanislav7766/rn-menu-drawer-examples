import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

const MenuContent = () => (
  <View style={styles.drawer}>
    <View style={styles.body}>
      <Text style={styles.text}>Here your menu content</Text>
    </View>
    <View style={styles.bottom}>
      <View style={styles.footer}>
        <Text style={styles.text}>Logout</Text>
      </View>
    </View>
  </View>
);

export default MenuContent;
