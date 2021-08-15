import * as React from 'react';
import Container from './styles';
import { Text } from 'react-native';

const SignUp = () => {
    return (
        <Container>
            <View>
                <Text>Hot Company</Text>
            </View>
            <View>
                <Text>Cria sua conta:</Text>
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
                <Text>Já possui uma conta?</Text>
                <Button
                onPress={handleNewAccount}
                title="Faça Login"/>
            </View>
        </Container>
    )
}

export default SignUp;