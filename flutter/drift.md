## Drift
- 플러터용 SQL 데이터베이스 플러그인

## 사용법
### content.dart 파일
-  content.dart
```dart
import 'package:drift/drift.dart';

class Content extends Table {
    //PRIMARY KEY
    IntColumn get id => integer().autoIncrement()();

    // 내용
    TextColumn get content => text()();

    // Category Color Table ID
    IntColumn get colorId => integer()();

    // 생성 날짜
    DateTimeColumn get createdAt =>
        dateTime().clientDefault(() => DateTime.now())();
        // dateTime()는 항상 DateTime.now()가 될 것임을 명시
}
```

- color.dart
```dart
import 'package:drift/drift.dart';

class Colors extends Table{
    // PRIMARY KEY
    IntColumn get id => integer().autoIncrement()();

    // 색상 코드
    TextColumn get hexCode => text()();
}
```

> autoIncrement를 이용하여 primary key 자동 생성 가능, 이로써 insert할 때 id를 넣을 필요 사라짐.

<br/>
<br/>

### database.dart 파일
- drift로 데이터베이스 연결할 코드를 작성한 파일

```dart
import 'dart:io';
import 'package:drift/native.dart';
import 'package:my_scheduler/model/color.dart';
import 'package:my_scheduler/model/content.dart';
import 'package:drift/drift.dart';
import 'package:path/path.dart' as p;
import 'package:path_provider/path_provider.dart';

part 'database.g.dart'; // * 1

@DriftDatabase( // * 2
  tables: [
    Content,
    Colors, 
  ],
)

class LocalDatabase extends _$LocalDatabase { // * 3
    LocalDatabase() : super(_openConnection()); // * 4

    // 컨텐츠를 데이터베이스에 넣을 때
    Future<int> createContent(ContentCompanion data) => into(content).insert(data);

    // 컬러를 데이터베이스에 넣을 때
    Future<int> createColor(ColorsCompanion data) => into(colors).insert(data);

    Future<List<CategoryColor>> getCategoryColors() =>
        select(categoryColors).get();


    @override // * 5
    int get schemaVersion => 1;
}

LazyDatabase _openConnection() { // * 4
  return LazyDatabase(() async {
    final dbFolder = await getApplicationDocumentsDirectory();
    final file = File(p.join(dbFolder.path, 'db.sqlite'));
    return NativeDatabase(file);
  });
}
```

1. `part 'database.g.dart'`
- `part`는 `import`와 유사하지만 더 넓은 기능을 함, private값까지 불러올 수 있음.
- 현재파일명 사이에 g 넣어준 것을 part함 (.g -> generate // 자동으로 생성 된다는 뜻)
- 즉 'database.g.dart' 파일은 아직 존재하지 않지만 후에 특정 커맨드를 실행해 자동으로 생성됨을 의미

<br/>

2. `@DriftDatabase`
- `DrifitDatabase`라는 decorator를 사용하여 어떤 클래스들을 테이블로 쓸지 정해줌
- 즉 Content, Colors 이 두개의 클래스를 테이블로 쓸 것이라는 걸 drift에게 알려주는 것.

<br/>

3. `LocalDatabase` ; 실제로 우리가 데이터베이스를 형성할 클래스 
- 여기서 `_$LocalDatabase`는 나중에 drift가 만들어주는 클래스로 `database.g.dart` 파일 자동 생성될 때<br/> 
플러터에서 `LocalDatabase`라는 클래스의 이름을 보고서 `_$LocalDatabase`라는 새로운 클래스를 `database.g.dart` 파일 안에다가 만듦
- `_` 언더스코어가 있기 때문에 private 값, 하지만 불러올 수 있는 것은 import가 아닌 part로 불렀기 때문.
- _$LocalDatabase 클래스를 상속하면 데이터베이스에 관련된 모든 기능을 사용할 수 있음

<br/>

4. `_openConnection` 제공
- LocalDatabase를 만들 때 _openConnection 제공해주어야함 
- 이는 어떤 위치에서 데이터를 관리할지 명시한 `file` 위치를 가져와서 그 file로 database를 만들라는 것
- `final dbFolder = await getApplicationDocumentsDirectory()`
    - dbFolder ;  db를 저장할 폴더
    - getApplicationDocumentsDirectory() ; 현재 배정받은 폴더 위치
- `final file = File(p.join(dbFolder.path, 'db.sqlite'))` 
    - file ; dbFolder에 database 정보 저장할 파일
    - dbFolder.path 데이터베이스를 저장할 경로에 'db.sqlite'라는 파일을 생성한 것.
- `return NativeDatabase(file)`
    - file로 데이터 베이스 만들기

<br/>

5. schemaVersion   
- 스키마 버전은 데이터베이스에 설정한 테이블들의 상태 버전
- 테이블 구조 바뀔 때마다 버전을 올려줘야함