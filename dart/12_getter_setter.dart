// getter setter - 데이터를 간단하게 가공할 때 사용
// _ 붙이면 private 속성 부여 -> 외부에서 현재 파일을 불러오더라도 _Idol 클래스를 사용할 수 없음
void main() {
  _Idol blackPink = _Idol.fromList([
    ['지수', '제니', '리사', '로제'],
    '블랙핑크'
  ]);

  _Idol aespa = _Idol.fromList([
    ['카리나', '윈터', '닝닝', '지젤'],
    '에스파'
  ]);

  print(blackPink.firstMember); // 지수
  print(aespa.firstMember); // 카리나

  blackPink.firstMember = '솜';
  print(blackPink.firstMember); // 솜
}

class _Idol {
  String name;
  List<String> members;

  _Idol(this.name, this.members);
  _Idol.fromList(List values)
      : this.members = values[0],
        this.name = values[1];

  void sayHello() {
    print('안녕하세요 ${this.name}');
  }

  void introduce() {
    print('저희 멤버는 ${this.members}입니다');
  }

  //getter
  String get firstMember {
    return this.members[0];
  }

  //setter - 값을 새로 지정
  set firstMember(String name) {
    this.members[0] = name;
  }
}
