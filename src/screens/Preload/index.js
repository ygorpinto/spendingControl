import * as React from 'react';
import Container from './styles';
import { ActivityIndicator, Image, Text, View } from 'react-native';

const Preload = () => {
    return (
        <Container>
            <Image 
                source={{
                uri:"https://i.pinimg.com/originals/80/36/d2/8036d28f9978251bfba406cec5e8f18f.gif"
            }}
                style={{width: 400, height: 400}}/>
            <ActivityIndicator 
                size="large" 
                color="#b71ba2" />
        </Container>
    )
}

export default Preload;