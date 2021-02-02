import React from 'react';
import {View, Text, StatusBar, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';
import Swiper from 'react-native-swiper';


const Slider = () =>{
    return(
        <View style={styles.sliderContainer}>
            <Swiper autoplay 
                height={200} activeDotColor="#393939" dotColor="#696969" autoplay={true} showsButtons={false} buttonWrapperStyle={styles.ButtonWrapperStyle}>
                <View style={styles.slide}>
                    <Image source={require('../assets/slider1.jpg')} resizeMode="cover" style={styles.slideImage}/>
                </View>
                <View style={styles.slide}>
                    <Image source={require('../assets/slider2.jpg')} resizeMode="cover" style={styles.slideImage}/>
                </View>
                <View style={styles.slide}>
                    <Image source={require('../assets/slider3.jpg')} resizeMode="cover" style={styles.slideImage}/>
                </View>
                <View style={styles.slide}>
                    <Image source={require('../assets/slider4.jpeg')} resizeMode="cover" style={styles.slideImage}/>
                </View>
            </Swiper> 
        </View>
    );
}
export default Slider;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    sliderContainer: {
        height: 200,
        width: '100%',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    wrapper: {},
    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    slideImage: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
    },
    ButtonWrapperStyle: { 
        color: '#fff',
        flexDirection: 'row', 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        flex: 1, 
        paddingHorizontal: 10, 
        paddingVertical: 10, 
        justifyContent: 'space-between', 
        alignItems: 'center'
    }
});