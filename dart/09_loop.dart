void main() {
  List<int> numbers = [1, 2, 3, 4, 5, 6];

  // for loop
  int total = 0;

  for (int i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  ;

  print(total); // 21

  // for in loop
  int total1 = 0;

  for (int number in numbers) {
    total1 += number;
  }
  ;

  print(total1); // 21

  // while loop
  int total2 = 0;

  while (total2 < 10) {
    // 조건 설정 유의
    total2 += 1;
  }
  ;

  print(total2); // 10

  // break -> loop 통채로 종료
  int total3 = 0;

  while (total3 < 10) {
    total3 += 1;

    if (total3 == 5) {
      // total이 5면 루프를 나가버려..
      break;
    }
  }

  print(total3);
  // 5
  // 0

  // continue -> 현재 실행하는 loop만 취소
  for (int i = 0; i < 10; i++) {
    if (i == 5) {
      // i가 5면 현재 루프를 종료하고 다음 루프로 넘어감
      continue;
    }
    print(i); // 1,2,3,4,6,7,8,9
  }
}
