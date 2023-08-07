# GridView
- 카드 형식 리스트를 구현하기 좋은 위젯
- GridView.count 방식은 모든 하위 위젯들을 렌더링하며 GridView.builder 방식은 화면에 보이는 위젯만 렌더링함. 
- builder 사용시 gridDelegate를 설정하여 어떤식으로 GridView를 그릴지 정의함. 

## GridView.builder()
### gridDelegate: SliverGridDelegateWithFixedCrossAxisCount
- 간격 지정 가능
```dart
GridView.builder(
    gridDelegate: SliverGridDelegateWithFixedCrossAxisCount( // 어떤식으로 gridview를 그릴지 정의
        crossAxisCount: 2,
        crossAxisSpacing: 12.0,
        mainAxisSpacing: 12.0,
    ),
    itemBuilder: (context, index){
        return 리턴값;
    },
    itemCount: 100, // 보여줄 아이템 개수
);
```

### gridDelegate: SliverGridDelegateWithMaxCrossAxisExtent
- 위젯의 최대 사이즈 설정
```dart
GridView.builder(
    gridDelegate: SliverGridDelegateWithMaxCrossAxisExtent(
        maxCrossAxisExtent: 100,//위젯들의 최대 사이즈 설정
    ),
    itemBuilder: (context, index){
        return 리턴값;
    },
);
```