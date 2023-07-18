### FutureBuilder
```dart
import 'dart:math';
import 'package:flutter/material.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Padding(
        padding: const EdgeInsets.all(8.0),
        child: FutureBuilder(
          future:
                getNumber(), 
          builder: (context, snapShot) {
            if (snapShot.hasData) {
                // 데이터가 있을 때 위젯 렌더링
            }
            if (snapShot.hasError) {
                // 데이터가 있을 때 위젯 렌더링
            }

            // 로딩중일 때 위젯 렌더링
            // if(!snapShot.hasData){ // 한번도 데이터 요청 안했을 때
            //   return Center(
            //     child: CircularProgressIndicator(),
            //   );
            // }

            return Column(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                Text(
                  'future builder',
                  style: TextStyle(
                    fontSize: 20.0,
                  ),
                ),
                Text(
                  'ConState : ${snapShot.connectionState}',
                ),
                Text(
                  'Data: ${snapShot.data}',
                ),
                Text(
                  'Error: ${snapShot.error}',
                ),
                ElevatedButton(
                  onPressed: () {
                    setState(
                        () {}); 
                  },
                  child: Text('setState'),
                ),
              ],
            );
          },
        ),
      ),
    );
  }

  Future<int> getNumber() async {
    await Future.delayed(Duration(seconds: 3));

    final random = Random();

    //throw Exception('에러가 발생했습니다'); // 에러가 나는 동안에도 캐싱 됨.

    return random.nextInt(100);
  }
}

```

#### 기억할 점 
- FutureBuilder를 통해 Future의 현상태를 쉽게 파악하고 데이터를 불러오는 동안 보여줄 것과 이용 가능할 때 보여줄 것의 선택이 가능해짐. 
```dart
Future<MyData> _data;

initState(){
    _data = http.get('~');
}

FutureBuilder(
    future: _data,
    builder: (context, snapshot){
        if(snapshot.connectionState == done){
            return AwesomeData(snapshot.data);
        }
        else{
            return CircularProgressIndicator();
        }
    }
)
```

<br/>

- builder 함수 안에서 setState를 넣지 않더라도 자동으로 화면 변화를 적용할 수 있음
- snapshot 관련 데이터가 바뀐다? -> builder 다시 불림
- ElevatedButton를 누르면 setState가 실행됨. setState는 빌드를 재실행. 이때 기존 값 캐싱
- Future 함수인 getNumber 함수 내 throw 함수로 에러를 발생시킬 수 있음
- 에러가 나는 동안에도 캐싱 -> (에러 발생 상태에서 setState 버튼 누르면 error 값 유지한 상태로 ConnectionState.waiting -> ConnectionState.done 상태가 됨.)

<br/>
<br/>

https://api.flutter.dev/flutter/widgets/FutureBuilder-class.html



