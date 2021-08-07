/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import mock from './mocks.json'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Section from './src/Section/Section';
import Title from './src/Title/Title';

const App = () => {

  return (
    <SafeAreaView>
      <StatusBar/>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <View>
          <Section>
            <Title/>
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
