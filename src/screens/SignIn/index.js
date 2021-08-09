import * as React from 'react'; 
import Container from './styles';
import { Button, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';

const SignIn = () => {


    

    return (
        <Container>
            <View>
                <Text>Hot Company</Text>
            </View>
            <View>
                <Text>Faça o login:</Text>
                <TextInput 
                placeholder="Digite seu usuário"
                keyboardType="default"/>
                <TextInput
                placeholder="Digite sua senha" 
                keyboardType="default"
                textContentType="password"/>
                <Button
                title="Entrar"
                />
                <Text>Não possui uma conta?</Text>
                <Button
                onPress={() => {}}
                title="Criar uma conta"/>
            </View>
        </Container>
    )
}

export default SignIn;