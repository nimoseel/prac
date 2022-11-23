import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, Image, ScrollView,  SafeAreaView, TextInput, Button,TouchableOpacity, Alert } from 'react-native';
import MenuInputFunc from './components/MenuInputFunc';
import MenuSelect from './components/MenuSelect';

export default function App() {
    const [selectList, setSelectList] = useState([""]);

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{height: 300}}>
                    <MenuSelect selectList={selectList}/>
                </View>
                <MenuInputFunc selectList={selectList} setSelectList={setSelectList}/>
            </ScrollView>
        </SafeAreaView>
    );
}
