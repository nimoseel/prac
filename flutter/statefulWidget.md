## 1. widget
- '불변' 법칙을 기반으로 위젯의 값을 변경할 경우 기존 위젯을 삭제하고 새로운 위젯을 생성한다.

## 2. statelessWidget
- constructor로 위젯이 생성되자마자 build 함수가 실행되며 
- widget의 불변 법칙에 따라 위젯의 값 변경시 기존 위젯을 삭제하고 새로운 위젯을 생성한다.
- 즉 statelessWidget은 라이프 사이클 동안 build함수를 한번만 실행할 수 있다. (변경시 매번 새로운 widget이 생성되니까!)

## 3. statefulWidget
- constructor로 위젯 생성되면 createState 함수를 불러 state를 만듦, 이 때 initState가 불린다.

### createState()
- StatefulWidget의 상태를 생성하여 반환하는 역할

<br/>


## 4. state
### initState()
- State 객체가 생성된 후, 위젯이 트리에 추가되기 전에 호출되는 함수
- 주로 초기화 작업을 수행하는 데 사용
- state 생성될 때 한번 불림

### didChangeDependencies()
- State 객체의 의존성이 변경되었을 때 호출되는 함수
- initState 함수 불리면 didChangeDependencies 함수 불림

### build()
- 객체가 변경 되었을 때 위젯의 ui를 빌드하는 함수
- dirty 상태면 build 함수가 불려 위젯을 화면에 그림
- build 실행되면 clean 상태로 돌아옴

### deactivate() 
- 위젯이 트리에서 제거되기 전에 호출되는 함수
- 해당 위젯이 다시 활성화되지 않을 것임을 나타냄

### dispose()
- 위젯이 트리에서 제거될 때 호출되는 함수
- 주로 리소스의 해제 작업이나 구독 취소와 같은 정리 작업을 수행하는 데 사용

### didUpdateWidget()
- 위젯의 속성이 변경되었을 때 호출되는 함수

### setState()
- 객체의 상태가 변경되었음을 알리고, build() 함수를 호출하여 UI를 업데이트하는 함수
- 일반적으로 build 함수 내에서 호출됨. (상태 변경 후 ui 업데이트 위해)


<br/>

    수정시 createState 실행되지 않음, 기존 statefulWidget이 갖고 있던 state를 찾아 재활용


<br/>

### dirty 
    -  위젯이 변경되어 다시 빌드되어야 함을 의미
    - didChangeDependencies 함수 불리면 dirty 상태 됨.

### clean 
    - 위젯이 변경되지 않아 추가적인 빌드가 필요하지 않음을 의미

<br/>
<br/>

## 코드
```dart
class HomeScreen extends StatefulWidget {
    const HomeScreen({Key? key}) : super(key: key);
    // HomeScreen 클래스의 생성자를 정의하는 코드.
    // 이 생성자는 선택적인 Key 매개변수를 받으며, 해당 매개변수를 부모 클래스인 StatefulWidget의 생성자에 전달.
    // super(key: key)는 부모 클래스의 생성자를 호출하여 key 매개변수를 전달하는 역할을 함.
    // HomeScreen 클래스의 부모 클래스는 StatefulWidget

    @override
    State<HomeScreen> createState() => _HomeScreenState();
    // _HomeScreenState 는 HomeScreen 위젯의 상태를 관리하는 클래스로 사용.
    // StatefulWidget의 createState() 메서드에 의해 생성, 이 메서드는 _HomeScreenState 인스턴스를 반환.
}
```


const HomeScreen({super.key});

    stful 단축어로 StatefulWidget을 만들면 `const HomeScreen({super.key});` 이렇게 만들어줌. 
    하지만 생성자에서 super 키워드를 사용할 땐 super 다음에 호출할 부모 클래스의 생성자와 해당 생성자에 전달할 매개변수를 명시해야함.
    super.key만 작성할 경우 매개변수를 전달하지 않은 부모 클래스의 기본 생성자를 호출하는 것.
