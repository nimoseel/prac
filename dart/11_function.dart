void main() {
  positional_addNumbers(20, 30, 40); // 짝수입니다

  optional_addNumbers(20); // 짝수입니다

  named_addNumbers(y: 20, x: 10, z: 30);
  // x : 10
  // y : 20
  // z : 30
  // 짝수입니다.

  named_optional_addNumbers(y: 20, x: 10);
  // x : 10
  // y : 20
  // z : 50
  // 짝수입니다.

// not void
  int result = intReturn_addNumbers(y: 20, x: 10); // 짝수입니다
  int result2 = intReturn_addNumbers(x: 10, y: 20, z: 50); // 짝수입니다
  print('result : $result'); // result : 60
  print('result2 : $result2'); // result2 : 80
  print('sum : ${result + result2}'); // sum : 140

// arrow function
  int result3 = arrow_addNumbers(y: 30, x: 10);
  int result4 = arrow_addNumbers(x: 10, y: 40, z: 50);
  print('result3 : $result3'); // result3 : 70
  print('result4 : $result4'); // result4 : 100
  print('sum : ${result3 + result4}'); // sum : 170
}

positional_addNumbers(int x, int y, int z) {
  // positional parameter ; 순서 중요
  int sum = x + y + z;

  if (sum % 2 == 0) {
    print('짝수입니다');
  } else {
    print('홀수입니다');
  }
  ;
}

optional_addNumbers(int x, [int y = 20, int z = 30]) {
  // 기본값 설정 !
  int sum = x + y + z;

  if (sum % 2 == 0) {
    print('짝수입니다');
  } else {
    print('홀수입니다');
  }
  ;
}

named_addNumbers({
  // 이름을 지정한 파라미터, 순서 중요하지 않음
  required int x,
  required int y,
  required int z,
}) {
  int sum = x + y + z;

  print('x : $x');
  print('y : $y');
  print('z : $z');

  if (sum % 2 == 0) {
    print('짝수입니다.');
  } else {
    print('홀수입니다.');
  }
}

named_optional_addNumbers({
  required int x,
  required int y,
  int z = 50, // required를 지워주면 z는 optional parameter
}) {
  int sum = x + y + z;

  print('x : $x');
  print('y : $y');
  print('z : $z');

  if (sum % 2 == 0) {
    print('짝수입니다.');
  } else {
    print('홀수입니다.');
  }
}

int intReturn_addNumbers({
  // int값을 리턴하는 함수 // 앞서 작성한 함수들은 리턴값이 없는 void 함수
  required int x,
  required int y,
  int z = 30, // 기본값 넣어주기
}) {
  int sum = x + y + z;

  if (sum % 2 == 0) {
    print('짝수입니다.');
  } else {
    print('홀수입니다.');
  }

  return sum; // 리턴값 sum
}

int arrow_addNumbers({
  required int x,
  required int y,
  int z = 30, // 기본값 넣어주기
}) =>
    x + y + z; // x+y+z 값 리턴
