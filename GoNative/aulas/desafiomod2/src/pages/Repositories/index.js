import React from 'react';
import { View, Text } from 'react-native';

import Header from '../../components/Header';

import styles from './styles';

const Repositories = () => (
  <View style={styles.container}>
    <Header title="Repositórios" />
    <Text>Welcome</Text>
  </View>
);

export default Repositories;
