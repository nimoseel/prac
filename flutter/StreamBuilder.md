### StreamBuilder
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
        child: StreamBuilder<int>(
          stream:
              streamNumbers(),
          builder: (BuildContext context, AsyncSnapshot<int> snapShot) {
            return Column(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                Text(
                  'stream builder',
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

    Stream<int> streamNumbers() async* {
    // async* -> 제너레이터를 사용하는 비동기 함수로 yield 키워드를 사용하여 값을 생성하고 반환
    for (int i = 0; i < 10; i++) {
        if (i == 8) {
            throw Exception('i==7 에러 발생');
        }

        await Future.delayed(Duration(seconds: 1)); // 

        yield i;
        }
    }
}
```

<br/>

#### 기억할 점 
- Dart는 Streams를 사용하여 비동기식 데이터 스트림을 지원함.
```dart
Stream<int> count() async*{
    int i = 1;
    while(ture){
        yield i++;
    }
}
```
- 플러터는 StreamBuilder 위젯을 사용하여 Streams를 사용. 
- initialData를 사용하여 초기 데이터를 제공하여 첫이벤트를 기다리는 동안 데이터를 보여주거나<br/> 
snapshot.hasData 로 스냅샷에 데이터가 있는지 확인한다.

```dart
StreamBuilder<int>(
    stream: _myStream, // stream 값 연결
    // initialData: 42,
    builder: (context, snapshot){
        //if(!snapshot.hasData){
        //    return CircleProgressIndicator();
        //}
        return MyWidget(snapshot.data);
    },
);
```


- StreamBuilder도 FutureBuilder와 마찬가지로 데이터 값이 캐싱됨. 때문에 새로 빌드 했을 때 데이터 값이 null부터 다시 돌아가는 것이 아니라 마지막으로 가져온 기존 데이터 값을 데이터 값에 넣어주고 그 이후 새로 들어온 값을 보여줌. 

- Future를 리턴해주는 함수 같은 경우 dispose 해줄 필요 없지만 Stream은 한번 열게되면 닫아줘야함. 하지만 StreamBuilder는 모든 Stream을 닫는 것까지 알아서 해주기 때문에 Stream 닫는 것을 신경쓸 필요 없음.

<br/>


#### StreamBuilder와 async*
- StreamBuilder는 Stream을 기반으로 데이터 흐름을 감지하고 데이터가 업데이트 될 때마다 builder를 실행. 때문에 async* 함수를 사용하여 Stream을 생성하여 Stream을 구독하고 데이터가 발생할 때마다 builder를 실행할 수 있음. streamNumbers함수는 async* 함수로 정의된 Stream<int>를 생성하며 이 Stream은 1초 간격으로 1-10 값을 반환한다. 

<br/>
<br/>


https://api.flutter.dev/flutter/widgets/StreamBuilder-class.html