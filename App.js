/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
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

const App = () => {

  return (
    <SafeAreaView>
      <StatusBar/>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <View>
          <Section title="Hot Company">
            <Text>Hot Company</Text> 
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
