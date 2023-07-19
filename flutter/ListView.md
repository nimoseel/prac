### ListView 위젯
#### ListView.builder
- `itemCount`는 리스트에서 보여줄 `MyCard`의 개수로 아래 코드에선 10으로 설정되어 있기 때문에<br/>
MyCard가 그려질 때마다 `itemBuilder`가 실행되며(총 10번), 각각 순서에 어떤 위젯을 리턴할지 정할 수 있음.

```dart
Expanded(
    child: Padding(
        padding: EdgeInsets.symmetric(horizontal: 12.0),
        child: ListView.builder(
            itemCount: 10, 
            itemBuilder: (context, index) {
                print(index);
                return MyCard(
                    startTime: 10,
                    endTime: 13,
                    content: 'sss $index',
                    color: Colors.red,
                );
            },
        ),
    ),
),
```



#### ListView.seperated
- `ListView.builer`를 `ListView.separated`으로 변경하면 무한 스크롤처럼 리스트가 나타남. 
- 만약 `itemCount`가 2000이라면 `ListView` 안에 2000개 모두를 한번에 보여주는 것이 아니라<br/>
스크롤 위치의 인덱스까지만 보여주기 때문에 메모리 측면에서 효율적이라고 할 수 있음.
- `itemBuilder`가 한번 실행될 때마다 그 다음 `separatorBuilder`가 실행됨. 
- 여기선 높이가 12인 `SizedBox`를 추가하여 MyCard 사이의 간격을 주는 것을 알 수 있음.

```dart
Expanded(
    child: Padding(
        padding: EdgeInsets.symmetric(horizontal: 12.0),
        child: ListView.separated(
            itemCount: 2000, 
            separatorBuilder: (context, index) {
                return SizedBox(height: 12.0);
            },
            itemBuilder: (context, index) {
                return MyCard(
                startTime: 10,
                endTime: 13,
                content: 'sss $index',
                color: Colors.red,
                );
            },
        ),
    ),
);
```