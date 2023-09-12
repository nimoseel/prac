Provider는 위젯에 non-widget 오브젝트를 제공하는 것이라고 할 수 있음. <br/>
만약 A Provider에서 B Provider의 값이 필요하다면? ProxyProvider를 사용한다.

## proxyProvider
다른 provider 값에 의존해 값을 만드는 provider.
```dart
ProxyProvider({
	Key? key,
    Create<R>? create,
    required ProxyProviderBuilder<T,R> update,
    UpdateShouldNotify<R>? updateShouldNotify,
    Dispose<R>? dispose,
    bool? lazy,
    TransitionBuilder? builder,
    Widget? child,
})
```

- create는 optional
자체적으로 핸들링하는 오브젝트가 있을 경우 한번만 호출, 
만약 값을 가져다만 쓴다면? create 불필요
- update는 required
다른 Provider의 value가 변하면 새로 만들어야하니 여러번 호출될 수 있음

### proxyProvider의 update
#### update 호출되는 경우
- ProxyProvider가 의존하는 Provider의 값을 처음으로 획득했을 때
- ProxyProvider가 의존하는 Provider의 값이 바뀔 때마다 
- ProxyProvider가 rebuild 될 때마다 

#### update typedef
1. ProxyProvider
```dart
typedef ProxyProviderBuilder<T,R> = R Function(
	BuildContext context,
    T value,
    R? previous, // create가 optional이기 때문에 Nullable
)
```
![](https://velog.velcdn.com/images/miniso/post/32c0b7e1-6247-4e87-825a-bbe846afbf6e/image.png) 
ProxyProvider의 update constructor를 보니<br/>
인자 2개짜리 업데이트가 인자 3개짜리 업데이트를 호출함

2. ProxyProvider2
- update 함수의 typedef, type T2 인자가 늘음
```dart
typedef ProxyProviderBuilder2<T, T2, R> = R Function(
	BuildContext context,
    T value,
    T2 value2,
    R? previous,
)
```
![](https://velog.velcdn.com/images/miniso/post/e44d6007-d635-4252-88a1-17f3acd2d206/image.png) 
ProxyProvider2의 update constructor를 보니<br/>
인자 2개짜리 업데이트가 인자 4개짜리 업데이트를 호출함

- ProxyProvider(ProxyProvider1)는 ProxyProvider0 부터 ProxyProvider6까지 있음
-  ProxyProviderN은 ProxyProvider0의 syntactic sugar


#### - proxyProvider<A, Result>
proxyProvider0의 update 콜백에서
1. 위젯트리 상에서 A라는 오브젝트의 인스턴스를 읽어 a 변수에 저장 
3. 업데이트 함수 호출 - 두번째 인자에 a 들어감
```dart
RroxyProvider)<Result>(
	update: (BuildContext context, Result result){
    	final A a = Provider.of<A>(context);
        return update(BuildContext context, A a, Result result);
    }
)
```
#### - proxyProvider<A, B, Result>
proxyProvider0의 update 콜백에서 
1. 위젯트리 상에서 A라는 오브젝트의 인스턴스를 읽어 a 변수에 저장 
2. 위젯트리 상에서 B라는 오브젝트의 인스턴스를 읽어 b 변수에 저장 
3. 업데이트 함수 호출 - 두번째 인자에 a, 세번째 인자에 b 들어감
```dart
RroxyProvider)<Result>(
	update: (BuildContext context, Result result){
    	final A a = Provider.of<A>(context);
    	final B b = Provider.of<B>(context);
        return update(BuildContext context, A a, B b, Result result);
    }
)
```
ProxyProvider0를 이용하면 ProxyProvider100도 만들 수 있음

<br/>
<br/>

## ChangeNotifierProxyProvider
- ChangeNotifierProxyProvider는 외부 ChangeNotifier와 값을 동기화하는 ChnageNotifierProvider.
- ProxyProvider와 약간 차이 있음


```dart
ChangeNotifierProvider(
	create: (BuildContext context){
    	return MyChangeNotifier(myModel: Provider.of<MyModel>(context, listen: false));
    },
    child: ...
)
```
#### 위 코드 해석
- `<MyModel>`에 의존하는 MyChangeNotifier 만듦
- create는 한번만 불리기 때문에 `listen:false` 옵션 설정<br/>
(만약 `listen:false` 옵션을 안준다면 ? 한번 불리고 말것을 계속 listen한다는 것)
- MyChangeNotifier를 만들때 다른 `<MyModel>`값에 의존해서 만들게 되는데<br/>`<MyModel>`값이 변하지 않는다면 문제가 되지 않지만 `<MyModel>`값이 변한다면 MyChangeNotifier를 업데이트할 방법이 없음. <br/>
(만약 MyModel 값이 변하지 않는 클래스, api 콜하는 repository 같은 것이라면 문제 되지 않음) 

아래 코드로 수정하여 해결 가능
```dart
ChangeNotifierProxyProvider<MyModel, MyChangeNotifier>(
	create: (_) => MyChangeNotifier(),
  	update: (_, MyModel myModel, MyChangeNotifier myChangeNotifier) => 
  	// 첫번째 update : ChangeNotifierProxyProvider의 property
 myChangeNotifier..update(myModel), // 두번째 update: myChangeNotifier의 메서드
    },
    child: ...
)
```
  - MyModel이 업데이트 될 때마다 MyChangeNotifier가 업데이트 되는데<br/> 동일한 인스턴스가 계속해서 쓰이는 거고 다시 create되는게 아니라는 것. 
  - 위 코드엔 두개의 update가 있는데 첫번째 update는 ChangeNotifierProxyProvider의 property,<br/> 두번째 update는 myChangeNotifier의 메서드.
  
  
update 내에서 MyModel인스턴스를 이용해 필요한 작업을 하고, 필요시 NotifyListeners() 호출
```dart
class MyChangeNotifier with ChangeNotifier{
  void update(MyModel myModel){
  	// do some custom work based on myModel that may call NotifyListeners()
  }
}
```

<br/>  

### 주의사항

  #### 1. ChangeNotifier를 업데이트해서 직접적으로 만들지 말것
- 의존하고 있는 값이 업데이트 될 때 state를 잃을 수 있음<br/>
만약 MyChangeNotifier안에 async 작업이 있는데 <br/>
async 작업이 끝나기전에 update가 먼저 일어날 경우 잘못된 state에 업데이트 하는 일 발생
- 이전에 notifier를 dispose하기 때문에 새로운 notifier를 create하는 overhead 발생할 수 있음
- ChangeNotifier를 MyModel 인스턴스가 변할 때마다 매번 create한다는건 ChangeNotifier의 설계 원칙에 반함. 
	
    - ChangeNotifier의 핵심은 ChangeNotifier가 mutate되고 mutation을 notify해주는 것. 
  - 그런데 매번 새로운 인스턴스를 create 한다? ChangeNotifier 설계 원칙에 어긋난다고 생각. 
  
#### 2. 가능하면 ProxyProvider를 쓰자
 - create된 object가 http 호출이나 다른 유사 side-effects없이 다른 object들의 combination으로 이루어진다면<br/> 
 ProxyProvider를 써서 매번 immutable한 오브젝트를 만드는 것을 선호 