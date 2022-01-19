import { StackActions } from '@react-navigation/native';
import React, {useEffect} from 'react';
import { View, Text,Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';



interface SplashProps {
    navigation: any;
  }

const Splash = (props:SplashProps) => {
    useEffect(()=> {
        setTimeout(() => {
             props.navigation.dispatch(StackActions.replace('Awal'))
        }, 3000)
    })
    return (
        <ScrollView>
            <Image source={require('../gambar/opening.jpg')}
            style={{alignItems:"center", justifyContent:"center",
            width:395,
            height:750}}></Image>
        </ScrollView>
    );
};

export default Splash;