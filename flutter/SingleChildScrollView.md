### SingleChildScrollView
- child 에 Column을 넣어 여러 위젯을 보여줄 수 있음
- 만약 Column안에 넣은 위젯의 크기가 현재 화면에 넘치지 않는다면 스크롤 되지 않음 
    - SingleChildScrollView 의 physics의 default값이 NeverScrollableScrollPhysics이기 때문
- 위젯의 크기가 화면에 넘치지 않더라도 스크롤하고 싶다면 
    - physics : AlwaysScrollableScrollPhysics() 설정
- 

### Physics
- NeverScrollableScrollPhysics() : 기본값, 스크롤 안됨
- AlwaysScrollableScrollPhysics() - 스크롤됨(안드로이드 바운싱x, ios - 바운싱o) 
- BouncingScrollPhysics() - ios처럼 바운싱되도록 설정
- ClampingScrollPhysics() - 안드처럼 바운싱되지 않도록 설정

### 스크롤할 때 위젯이 잘린다면?
- clipBehavior: Clip.none 설정

### 주의할점
- Column에 들어오는 위젯을 한번에 렌더링하기 때문에 비효율적. 
- 반면 ListView는 화면에 보이는 부분만 렌더링하기 때문에 최적화 가능.