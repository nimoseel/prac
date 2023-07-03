// 상속 - 속성과 기능을 자식에게 물려주기 위해 사용
// 인터페이스 - 어떤 특수한 구조를 강제하기 위해 사용
// abstract 키워드를 붙여 인스턴스를 만들지 못하게 만듦

void main() {
  BoyGroup bts = BoyGroup('BTS');
  GirlGroup ive = GirlGroup('IVE');

  bts.sayName(); //제 이름은 BTS 입니다.
  ive.sayName(); //제 이름은 IVE 입니다.

  print(bts is IdolInterface); //true
  print(bts is BoyGroup); //true
  print(bts is GirlGroup); //false

  print(ive is IdolInterface); //true
  print(ive is BoyGroup); //false
  print(ive is GirlGroup); //true
}

// interface - 클래스를 만들때 사용! 인터페이스의 형태를 지켜서 클래스를 만듦
abstract class IdolInterface {
  String name;

  IdolInterface(this.name);

  void sayName(); // abstract를 사용하면 함수의 바디 {}를 지워도 됨.
}

class BoyGroup implements IdolInterface {
  String name;

  BoyGroup(this.name);

  void sayName() {
    print('제 이름은 $name 입니다.');
  }
}

class GirlGroup implements IdolInterface {
  String name;

  GirlGroup(this.name);

  void sayName() {
    print('제 이름은 $name 입니다.');
  }
}
