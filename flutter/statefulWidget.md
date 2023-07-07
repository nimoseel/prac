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