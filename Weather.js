import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import Forecast from './Forecast';

export default function Weather(props) {

  return (
    <View  style={styles.container} >
      <Text style={{ fontSize: 20 }}> Weather  {props.zipCode} </Text>
      <View style={{width: 20, height: 20, backgroundColor: 'red'}}></View>     
      <View style={{width: 20, height: 20, backgroundColor: 'blue'}}></View>     
      <View style={{width: 20, height: 20, backgroundColor: 'green'}}></View>           
    </View>
  );
    const [forecastInfo, setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        temp: 0,
    })
    return (
        <View>
            <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
                <Text>Zip Code</Text>
                <Text>{props.zipCode}</Text>
                <Forecast {...forecastInfo} />
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',   
    alignItems: 'center' ,
    borderWidth: 5,
    borderColor: 'red',    
  }
}) 
    backdrop: {
        alignItems: 'center',
        width: '100%',
        height: '100%',

    },
});