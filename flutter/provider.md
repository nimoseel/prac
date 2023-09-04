```dart
import 'package:flutter/material.dart';

class FishModel with ChangeNotifier{ 
    // ChangeNotifier 클래스의 notifyListeners를 사용하기 위해 mixin

  final String name;
  int number;
  final String size;

  FishModel({required this.name, required this.number, required this.size});

  void changeFishNumber(){
    number++;
    notifyListeners();
  }
}
```
- addListener와 removeListener
    - addListener를 사용해 데이터 변경사항을 관심있는 위젯에게 알려줄 수 있지만, 실제 UI업데이트 수행하는데는 추가작업 필요  
    - addListener는 자동으로 dispose되지 않기 때문에 removeListener를 사용해 필요없는 addListener를 dispose 시켜줘야함.
- ChangeNotifier 클래스의 notifyListener 메서드 
    - ChangeNotifier 클래스는 데이터가 변경될 때 위젯에게 알리고, UI 업데이트를 가능하게 함. 
    - 데이터 변경시 notifyListeners 메서드 호출하면 ChangeNotifier 클래스를 리스닝하고 있는 모든 위젯에게 데이터 변경 사실을 알릴 수 있음. 

## ChangeNotifier의 단점
1. 매번 수동으로 addListener를 등록해주어야함.
2. 제거 역시 removeListener를 사용해서 수동으로 해주어야함.
3. 위젯들에게 데이터를 전달해주기 위해서 FishModel 인스턴스를 매번 생성자를 통해 전달해주어야함
4. UI 리빌드도 수동으로 해결해야함.
   -> ChangeNotifierProvider 사용해야함

## ChangeNotifierProvider 장점
1. 모든 위젯들이 listen 할 수 있는 ChangeNotifier 인스턴스 생성
2. 자동으로 필요 없는 ChangeNotifier 제거 (자동으로 dispose)
3. Provider.of를 통해서 위젯들이 쉽게 ChangeNotifier인스턴스에 접근할 수 있게 해줌
4. 필요시 UI를 리빌드 시켜줄 수 있음
5. 굳이 UI 리빌드할 필요 없는 위젯을 위해 listen:false기능 제공


## MultiProvider
가령 두개의 다른 타입의 ChangeNotifierProvider가 존재하고 한 위젯에서 이 모두에게 접근해야할 때 사용
만약 여러개의 Provider가 계층 구조를 이룬다면 가독성도 떨어지고 코드가 효율적으로 보이지 않음

```dart
Provider(
create: (context) => ModelA(),
child: Provider(
    create: (context) => ModelB(),
    child: Provider(
      create: (context) => ModelC(),
      child: MaterialApp(),
    ), 
  ),
);
```

```dart
MultiProvider(
  provider:[
    Provider(create: (context) => ModelA,
    Provider(create: (context) => ModelB,
    Provider(create: (context) => ModelC, 
  ],
  child: MaterialApp(),
);
```

### 참고자료 
- https://www.youtube.com/watch?v=de6tAJS2ZG0