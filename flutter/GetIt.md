## dependency injection
### 1. pubspec.yaml의 dependencies에 get_it 추가

### 2. main.dart에서 
```dart
void main() async{
    final database = LocalDatabase(); 
    // 이때의 LocalDatabase는 drift_database.dart에 저장되어 있는 LocalDatabase 클래스를 의미함

    GetIt.I.registerSingleton<LocalDatabase>(database); // GetIt 클래스를 사용해 database 값을 가져올 수 있음
}
```

### 사용할 땐 
```dart
GetIt.I<LocalDatabase>().getColors(); // LocalDatabase에 작성한 getColors 함수 호출
```