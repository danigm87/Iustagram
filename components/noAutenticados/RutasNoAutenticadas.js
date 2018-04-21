import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Text } from 'react-native';

const SingUp = () => <Text>Componente SingIn</Text>

const SingIn = (props) => {
    console.log('Sing up enter');
    console.log(props);
    
    return <Text>Componente SingUp</Text>
}

const RutasNoAutenticadas = StackNavigator({
    SingIn: {
        screen: SingIn
    },
    SinUp: {
        screen: SingUp
    }
});

export { RutasNoAutenticadas };