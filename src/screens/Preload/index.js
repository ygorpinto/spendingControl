import * as React from 'react';
import Container from './styles';
import { ActivityIndicator, Image, Text, View } from 'react-native';

const Preload = () => {
    return (
        <Container>
            <Image 
                source={require('../../assets/icon.png')}
                style={{width: 300, height: 300}}/>
            <ActivityIndicator 
                size="large" 
                color="#000000" />
        </Container>
    )
}

export default Preload;