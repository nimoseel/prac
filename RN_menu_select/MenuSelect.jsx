import React, {useState} from "react";

import { StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    Alert,
    ScrollView,
    SafeAreaView,
    TouchableOpacity,
    Platform
} from "react-native";

const MenuSelect = ({selectList}) => {
    const [isSelect, setIsSelect] = useState(false);
    const [selectChoice, setSelectChoice] = useState("");
    
    return (
        <View style={{
            alignItems: 'center',
            paddingTop: 70,
            paddingBottom: 10,
            paddingHorizontal: 20
        }}>
            <Text
                style={{fontSize: 30}}>
                {isSelect ? "선택완료" : "메뉴를 골라 봅시다"}
            </Text>
            {
                isSelect ?
                <>
                    <Text
                        style={{fontSize: 30}}>
                        {selectChoice}
                    </Text>
                    <Text
                        style={{fontSize: 30}}>
                        다시 선택하시겠습니까?
                    </Text>
                </>
                :
                <>
                </>
            }
            <View style= {{ marginTop : 30 , height: 120}}>
                {
                    Platform.OS === "ios" ?
                        <ScrollView horizontal={true}> 
                        {/* 좌우 스크롤 가능 */}
                            <Image 
                                style= {{ width: 100, height: 100, marginRight: 20}} 
                                source={{uri: 'https://cdn.pixabay.com/photo/2016/04/26/03/55/salmon-1353598_1280.jpg',}}/>

                            <Image 
                                style= {{ width: 100, height: 100, marginRight: 20}} 
                                source={{uri: 'https://cdn.pixabay.com/photo/2014/07/08/12/34/pizza-386717__480.jpg',}}/>

                            <Image 
                                style= {{ width: 100, height: 100, marginRight: 20}} 
                                source={{uri: 'https://cdn.pixabay.com/photo/2019/07/16/20/07/steak-4342500_1280.jpg',}}/>
                            
                            <Image 
                                style= {{ width: 100, height: 100, marginRight: 20}} 
                                source={{uri: 'https://cdn.pixabay.com/photo/2019/12/01/15/08/if-the-4665686_1280.jpg',}}/>
                        </ScrollView>
                    :
                    <>
                        <Text>안드로이드</Text>
                    </>
                }
            </View>
            <View> 
                {/* 메뉴선택 고르기 */}
                <Button  
                    title={"메뉴 선택"}
                    onPress={()=>{
                        if(selectList[selectList.length-1] === ""){
                            Alert.alert(
                                "메뉴를 입력하세요",
                                "메뉴를 입력하고 입력을 추가하세요.",
                                [
                                    {text: "네"}
                                ]
                            )
                        } else {
                            setIsSelect(true);
                            setSelectChoice(
                                selectList[
                                    Math.floor(Math.random()* selectList.length)
                                ]
                            )
                        }
                    }} />
            </View>
        </View>
    )
}

export default MenuSelect;
