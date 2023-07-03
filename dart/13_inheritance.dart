// 상속
void main() {
  print('------idol------');
  Idol blackPink = Idol(name: '블랙핑크', membersCount: 4);
  blackPink.sayName(); // 저는 블랙핑크입니다.
  blackPink.sayMembersCount(); // 블랙핑크은 4명의 멤버가 있습니다.

  print('------boy------');
  BoyGroup bts = BoyGroup('BTS', 7);
  bts.sayName(); // 저는 BTS입니다.
  bts.sayMembersCount(); // BTS은 7명의 멤버가 있습니다.
  bts.sayMale(); // 저는 남자그룹입니다

  print('------girl------');
  GirlGroup ive = GirlGroup('IVE', 6);
  ive.sayName(); // 저는 IVE입니다.
  ive.sayMembersCount(); // IVE은 6명의 멤버가 있습니다.
  ive.sayFemale(); // 저는 여자그룹입니다

  print('------type comparison------');
  print(blackPink is Idol); //true
  print(blackPink is BoyGroup); //false
  print(blackPink is GirlGroup); //false

  print('------type comparison2------');
  print(bts is Idol); //true
  print(bts is BoyGroup); //true
  print(bts is GirlGroup); //false

  print('------type comparison3------');
  print(ive is Idol); //true
  print(ive is BoyGroup); //false
  print(ive is GirlGroup); //true
}

class Idol {
  //이름
  String name;
  int membersCount;

  Idol({
    required this.name,
    required this.membersCount,
  });

  void sayName() {
    print('저는 ${this.name}입니다.');
  }

  void sayMembersCount() {
    print('${this.name}은 ${this.membersCount}명의 멤버가 있습니다.');
  }
}

class BoyGroup extends Idol {
//   아이돌 클래스의 생성자를 준수해줘야 상속 가능
  BoyGroup(
    String name,
    int membersCount,
  ) : super(
          name: name,
          membersCount: membersCount,
        );

  // 보이그룹에만 있는 속성 추가
  void sayMale() {
    print('저는 남자그룹입니다');
  }
}

class GirlGroup extends Idol {
  GirlGroup(
    String name,
    int membersCount,
  ) : super(
          name: name,
          membersCount: membersCount,
        );

  // 걸그룹에만 있는 속성 추가
  void sayFemale() {
    print('저는 여자그룹입니다');
  }
}
