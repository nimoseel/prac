## ReorderableListView.builder
- 리스트의 순서를 바꿀 수 있는 'ReorderableListView'
- ex. TodoList 순서 변경 등
- onReorder함수 실행시 **이동 전 index 값을 기준으로 함**
- 순서 변경시 해당 데이터 리스트를 변경해주어야 하기 때문에 onReorder 함수 내에서 setState 실행
* itemBuilder의 index값 지정에 유의할 것 !

```dart
ReorderableListView.builder(
    itemBuilder: (context, index) {
        return 리턴값;
    },
    itemCount: 보여줄 아이템 개수,
    onReorder: (int oldIndex, int newIndex) {
    // 순서 변경되면 해당 데이터도 변경해줘야함.
        setState(() {
            // oldIndex, newIndex 모두 이동 되기전 index 값으로 산정
            if (oldIndex < newIndex) {
                newIndex -= 1;
            }
            final item = numbers.removeAt(oldIndex);
            numbers.insert(newIndex, item);
        });
    },
),
```

