void main() {
  //dynamic - 어떤 타입이든 넣을 수 있음
  dynamic name3 = '솜';
  dynamic number = 1;
  var name4 = '미';

  // var과 dynamic의 차이점
  name3 = 2; // 타입 변경 가능
  // name4 = 5; // error!
  // 초기에 '미'이라는 String 타입으로 선언했기에 다른 타입으로 변경 불가

  print(name3);
  print(number);
  print(name4);
}
