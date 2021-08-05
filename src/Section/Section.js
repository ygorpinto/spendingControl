import React from 'react';
import {
    Text,
    useColorScheme,
    View,
  } from 'react-native';

const Section = ({children, title}) => {
    const isDarkMode = useColorScheme() === 'dark';
    return (
      <View>
        <Text>
          {title}
        </Text>
        <Text>
          {children}
        </Text>
      </View>
    );
  };

  export default Section;