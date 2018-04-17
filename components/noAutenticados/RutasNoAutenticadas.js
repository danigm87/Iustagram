import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';


const SignIn = () => {
console.log('Ha entrado en SingIn')
return <Text>Componente SignIn</Text>
}

const SingUp = (props) => {
    console.log(props);
    console.log('Ha entrado en SingUp')
    return <Text>Componente SignUp</Text>
}


const RutasNoAutenticadas = StackNavigator({
   
    SingUp:{
        screen: SingUp
    },
    SignIn:{
        screen: SignIn
    },

    
});


export { RutasNoAutenticadas };