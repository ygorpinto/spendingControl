import * as React from 'react'; 
import Container from './styles';
import { Button, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {

    const navegation = useNavigation();

    const handleLogin = () => {
        navegation.navigate('SignIn');
    }

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
                placeholder="Digite seu Email"
                keyboardType="default"/>               
                <TextInput
                placeholder="Digite sua senha" 
                keyboardType="default"
                textContentType="password"/>
                <TextInput
                placeholder="Confirme sua senha" 
                keyboardType="default"
                textContentType="password"/>
                <Button
                title="Cadastrar"
                />
                <Text>Já possui uma conta?</Text>
                <Button
                onPress={handleLogin}
                title="Faça Login"/>
            </View>
        </Container>
    )
}

export default SignUp;