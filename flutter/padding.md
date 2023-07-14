## Padding 
- Padding 위젯으로 해당 요소를 감싼뒤 padding값 설정

<br/>

### 1. zero 
- 패딩 값 0
```dart
padding: EdgeInsets.zero
```

### 2. all 
- 상하좌우 모두 같은 값 지정
```dart
padding: EdgeInsets.all(16.0)
```

### 3. fromLTRB 
- left, top, right, bottom 순서대로 지정
```dart
padding: EdgeInsets.fromLTRB(left, top, right, bottom)
padding: EdgeInsets.fromLTRB(2, 8, 2, 8)
```

### 4. only 
- 사용할 부분 명시
```dart
padding: EdgeInsets.only(top: 16.0, bottom: 16.0, left: 8.0, right: 8.0)
padding: EdgeInsets.only(top: 2.0)
```

### 5.  symmetric 
- 대칭값 지정
```dart
padding: EdgeInsets.symmetric(
    vertical: 8.0, // 상하
    horizontal: 16.0, // 좌우
)

padding: EdgeInsets.symmetric(
    vertical: 8.0, 
)
```

