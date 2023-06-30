// final과 const
// 공통점
// 변수를 선언한 경우 변수 값을 변경할 수 없다.
// 타입을 생략할 수 있다.

// 차이점
// DateTime를 사용할 경우 코드가 실행되는 순간의 시간을 가져옴.
// final의 경우 빌드 타임의 값을 알고 있지 않아도 되기 때문에 문제가 없지만
// const의 경우 빌드 타임의 값을 알고 있어야하기 때문에 에러 발생
void main() {
  final name = '솜';
  print(name); // 솜

  // name = '민'; // error ! 변수 값 변경 불가

  const name2 = '민';
  print(name2); // 민

  // name2 = '솜'; // error ! 변수 값 변경 불가

  DateTime now = DateTime.now();
  print(now);

  final DateTime now2 = DateTime.now();
  // const DateTime now3 = DateTime.now(); // error !

  print(now2);
}
