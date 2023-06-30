void main() {
  // null operator
  double? number = 4; // nullable double
  print(number); // 4

  number = 2.0;
  print(number); // 2

  number = null;
  print(number); // null

  number ??= 3.0; // number가 만약 null이면 3.0으로 값을 바꾸라는 뜻
  print(number); // 3

  // type 비교
  int number1 = 1;
  print(number1 is int); // true
  print(number1 is String); // false

  print(number1 is! int); // false
  print(number1 is! String); // true

  // 논리
  bool result = 12 > 10 && 1 > 0;
  print(result); // true

  bool result2 = 12 > 10 && 0 > 1;
  print(result2); // false

  bool result3 = 12 > 10 || 1 > 0;
  print(result3); // true

  bool result4 = 12 > 10 || 0 > 1;
  print(result4); // true

  bool result5 = 12 < 10 || 0 > 1;
  print(result5); // false
}
