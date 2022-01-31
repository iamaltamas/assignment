import React, { Component } from 'react';
import { View, Text,TextInput, TouchableOpacity } from 'react-native'
import { AuthContext } from '../../../components/context';
import styles from './styles';
const Login = () => {

    const [data, setData] = React.useState({
        username: '',
        password: '',
    });

    const textInputChange = (val) => {

        setData({
            ...data,
            username: val,
        });
    }
    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val,
        });
    }

    const { signIn } = React.useContext(AuthContext);

    const loginHandle = (username, password) => {
        signIn(username, password)
    }

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Your Username"
                placeholderTextColor="#666666"
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={(val) => textInputChange(val)}

            />

            <TextInput
                placeholder="Your Password"
                placeholderTextColor="#666666"
                secureTextEntry={data.secureTextEntry ? true : false}
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={(val) => handlePasswordChange(val)}
            />
            <TouchableOpacity
                style={styles.signIn}
                onPress={() => { loginHandle(data.username, data.password) }}
            >
                <Text style={{ fontSize: 16, }}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Login;
