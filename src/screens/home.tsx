import React from 'react'
import { View, Text, Image, TouchableOpacity,ScrollView } from 'react-native'

interface HomeProps {
    navigation: any;
  }
const Home = (props:HomeProps) => {
    return (
        <ScrollView>
        <View>
                <View style={{backgroundColor:'#ffcfa1',height:550,justifyContent:'center',alignItems:'center' }}>
                    
                    <View style={{justifyContent:'center',
                        alignItems:'center'}}>
                        <Image 
                        source={require('../gambar/bsm.png')}
                        style={{height:100,width:200}}
                        />
                    </View>
                    <View style={{justifyContent:'center',
                        alignItems:'center', 
                        height:270,
                        width:270, 
                        borderWidth:3,
                        borderColor:'#FFFFFF',
                        borderRadius:150,
                        marginTop:30}}>
                        <Image 
                        source={require('../gambar/qr.png')}
                        style={{width:250,height:250}}
                        />
                    </View>            
                </View>
                <View style={{flexDirection:'row',backgroundColor:'#ffcfa1',height:200,flexWrap:'wrap',justifyContent:'center',alignItems:'center',}}>
                <View >
                        <TouchableOpacity
                                  onPress = {() => 
                                    props.navigation.navigate('Home')
                                }>

                    <View style={{
                            justifyContent:'center',
                            alignItems:'center', 
                            height:100, 
                            width:100,
                            borderWidth:2,
                            borderColor:'#FFFFFF',
                            borderRadius:30,
                            marginTop:20,                           
                           }}>

                        {/* <Image 
                        source={require('../gambar/qr.png')}
                        style={{width:60,height:60}}
                        /> */}
                        <Text style={{fontSize:40,color:'black' ,fontWeight:'bold' }}>القرآن</Text>
                    </View>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity
                       onPress = {() => 
                        props.navigation.navigate('As')
                    }>

                    <View style={{
                            justifyContent:'center',
                            alignItems:'center', 
                            height:100, 
                            width:150,
                            borderWidth:2,
                            borderColor:'#FFFFFF',
                            borderRadius:30,
                            marginTop:20,
                            marginLeft:10}}>

                    
                        <Text style={{fontSize:30,color:'black' ,fontWeight:'bold' }}>اسماعيل حسنة</Text>
                    </View>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity
                        onPress = {() => 
                            props.navigation.navigate('Tahlil')
                        }>

                    <View style={{
                            justifyContent:'center',
                            alignItems:'center', 
                            height:100, 
                            width:100,
                            borderWidth:2,
                            borderColor:'#FFFFFF',
                            borderRadius:30,
                            marginTop:20,
                            marginLeft:10}}>
                        
                        <Image 
                        source={require('../gambar/dzikir1.png')}
                        style={{width:60,height:60}}
                        />
                    </View>
                        </TouchableOpacity>
                    </View>

                    
                    
                    </View>

                    
                   
        </View>
        </ScrollView>
    )
}

export default Home




