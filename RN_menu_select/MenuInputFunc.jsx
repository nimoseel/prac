import React, {useState} from "react";
// 함수형 컴포넌트로 작업하니 기본적인 컴포넌트 임포트할 필요 없음

import { StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    Alert,
    ScrollView,
    SafeAreaView,
    TouchableOpacity
} from "react-native";

const MenuInputFunc = ({selectList, setSelectList}) => {

    return(
        <View 
            style={{
                marginTop: 50,
                height: 300, alignItems:'center'}}>
            {selectList.map((menu,key) => {
                return(
                    <TextInput 
                        key={key}
                        style={{
                            borderWidth: 1,
                            padding: 10,
                            width: '80%',
                            borderRadius:5,
                            marginBottom:20}}
                        onChangeText={(input)=>{
                            let changeList  = selectList;
                            changeList[key] = input;
                            setSelectList(changeList);
                        }}
                        placeholder={"메뉴"+(key + 1) + "선택"}/>
                )
            })}
            <TouchableOpacity
                style={{
                    width: 100, backgroundColor: 'blue', 
                    alignItems:"center",
                    padding:10,
                    borderRadius:10,
                }}
                onPress={()=>{
                    if(selectList[selectList.length-1]=== ""){
                        // 셀렉트 리스트의 마지막 값이 빈배열이면
                        Alert.alert(
                            "메뉴를 입력하세요", // 큰제목
                            "메뉴를 입력하고 입력을 추가하세요.", // 본문
                            [
                                {text: "네"} //버튼 부분
                            ]
                        )
                    }else{
                        // 버튼 누르면 인풋창 생기도록
                        // 인풋리스트 한칸 증가시키고 증가된 배열 출력
                        let newArray = [...selectList, ""];
                        setSelectList(newArray)
                    }
                }}>
                            
            <Text 
                style = {{
                    color:"white",
                    fontWeight:"900",
                    fontSize:20}}>
                메뉴추가
            </Text>
            </TouchableOpacity>
            {/* TouchableOpacity 는 view의 기능도 가지고 있음 */}
            </View>
    )
}

export default MenuInputFunc;