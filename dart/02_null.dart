void main() {
  // nullable ? null이 될 수 있다
  // nun-nullable ! null이 될 수 없다
  // null : 아무런 값이 있지 않다

  String name = '솜';
  print(name); // 솜
  // name = null; // error !
  // null이 들어갈 수 없는 string 타입

  String? name2 = '민'; //String 타입, null도 될 수 있음을 의미
  name2 = null;
  print(name2!); // name은 절대 null이 아니다
}
