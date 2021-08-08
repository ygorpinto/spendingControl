import * as React from 'react';
import Container from './styles';
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator, Image, Text, View } from 'react-native';

const Preload = () => {

    const navigation = useNavigation();

    return (
        <Container>
            <Image 
                source={require('../../assets/icon.png')}
                style={{width: 250, height: 300, marginBottom:80}}/>
            <ActivityIndicator 
                size="large" 
                color="#000000" />
        </Container>
    )
}

export default Preload;