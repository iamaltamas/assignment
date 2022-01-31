import React, { Component } from 'react';
import { View, Text,Image} from 'react-native';


import styles from './styles';
const Third = () => {
    return (

            <View style={styles.container}>
            <Image
            style={styles.imgStyle}
            source={require('../../assest/im.jpg')}
            />
        
      <View style={styles.imgContainer}>
      <Text style={{fontSize:16,color:'#000'}}>{`Top Nicknames for AlluArjun - ༶•┈┈⛧┈♛AA♛┈⛧┈┈•༶, I am big heart die fan, Allu Arjun fan, ALLU Arjun ?, Allu arjun, Allu Arjun fan ekada, Allu Arjun stylish name, Pavan. Choose name for games, social network and brands from our list or submit your nickname.`}</Text>
      </View>

        </View>
    );
};

export default Third;
