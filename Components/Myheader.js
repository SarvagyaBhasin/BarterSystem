import React,{Component} from 'react';
import {Header, Icon, Badge} from 'react-native-elements';
import {View, Text, StyleSheet} from 'react-native';
const Myheader = props=>{
    return(
        <Header
        centerComponent={{text:props.title, style:{color:'#90a5a9', fontSize:20, fontWeight:'bold'}}}
        backgroundColor='#eaf8fe'
        />
    )
}