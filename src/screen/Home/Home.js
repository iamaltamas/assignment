import React, { Component } from 'react';
import { View, Text,TouchableOpacity} from 'react-native';
import styles from './styles';
import { AuthContext } from '../../../components/context';

const Home = () => {
    const {signOut} = React.useContext(AuthContext)

    return (
        <View style={styles.container}>
            <Text style={styles.homeText}>Welcome</Text>
            <Text style={styles.homeText}>Home</Text>
           
                <TouchableOpacity
                style={styles.tuchBtn}
                onPress={()=>signOut()}
                >
                    <Text>
                        Logout
                    </Text>
                </TouchableOpacity>
            
        </View>
    );
};


export default Home;
