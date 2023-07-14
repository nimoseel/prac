### asMap()
- 자바스크립트는 배열에 인덱스를 통해 값을 바로 확인할 수 있었지만 다트 언어의 경우 리스트에 인덱스를 통해 값을 가져오는 문법을 지원하지 않음
- asMap() 메서드를 사용해 리스트를 맵으로 변환해 인덱스를 키로 사용하여 요소에 접근

```dart
void main(){
  final numbers = [123,456,789];
  
  print(numbers.asMap());  // {0: 123, 1: 456, 2: 789}
  print(numbers.asMap()[0]);  // 123
}
```

### asMap().entries
- asMap() 메서드만 사용하면 맵의 키에 직접적으로 접근하는 것은 불가능
- asMap().entries를 사용하여 맵의 엔트리(키-값 쌍)에 접근할 수 있음

```dart
void main(){
    final numbers = [123,456,789];
    
    print(numbers.asMap()[0].key);  // error
    print(numbers.asMap().entries); // (MapEntry(0: 123), MapEntry(1: 456), MapEntry(2: 789))
    print(numbers.asMap().entries.first); // MapEntry(0: 123)
    print(numbers.asMap().entries.last); // MapEntry(2: 789)
    print(numbers.asMap().entries.toList()); // [MapEntry(0: 123), MapEntry(1: 456), MapEntry(2: 789)]
    print(numbers.asMap().entries.toList()[0].key); // 0
    print(numbers.asMap().entries.toList()[0].value); // 123
}
```
