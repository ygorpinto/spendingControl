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
  Text
} from 'react-native';

import Section from './src/Section/Section';
import Container from './src/Container/Container';

const App = () => {

  return (
    <SafeAreaView>
      <StatusBar/>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <Container>
          <Section>
            <Text>{mock.title}</Text>
          </Section>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
