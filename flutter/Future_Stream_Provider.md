## FutureProvider
일반적으로 Future를 반환하는 함수를 사용하여 값을 제공하는 Provider


## StreamProvider
주가 지수와 같이 연속되는 future value는 StreamBuilder로 값을 보여준다. <br/>
하지만 만약 Stream 값을 여러 위젯에서 access 하고자 한다면 StreamProvider를 사용하는 것이 좋다. 

```dart
class Babies {
  final int age;

  Babies({required this.age});

   Future<int> getBabies() async {
    await Future.delayed(Duration(seconds: 3));

    if (age > 1 && age < 5) {
      return 4;
    } else if (age < 1) {
      return 0;
    } else {
      return 2;
    }
  }

  Stream<String> bark() async* {
    for (int i = 1; i < age; i++) {
      await Future.delayed(Duration(seconds: 2));
      yield 'Bark $i times';
    }
  }
}


// provider
  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: [
        ChangeNotifierProvider<Dog>(
          create: (context) => Dog(name: 'dog', breed: 'breed', age: 3),
        ),
        FutureProvider<int>(
          initialData: 0,
          create: (context) {
            final int dogAge =
                context.read<Dog>().age; 
                // 상위 프로바이더 값 사용 가능
            final babies = Babies(age: dogAge);
            return babies.getBabies();
          },
        ),
        StreamProvider(
	        initialData: 'Bark 0 times',
            create: (context) {
              final int dogAge = context.read<Dog>().age;
              final babies = Babies(age: dogAge * 2);
              return babies.bark();
            }
         ),
      ],
      child: MaterialApp(
        ...
    );
  }


// 사용하는 부분
Text(
  '- number of babies : ${context.watch<int>()}', 
  // future 함수의 리턴타입이 int이기 때문
),
Text(
  '- ${context.watch<String>()}',
  // stream 함수의 리턴타입이 string이기 때문,
  // 
),
```
