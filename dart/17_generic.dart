// 타입을 변수처럼 외부에서 받아서 쓸 수 있돋록 함
void main() {
  Lecture<String, String> lecture1 = Lecture('123', 'lecture1');

  lecture1.printIdType(); //String

  Lecture<int, String> lecture2 = Lecture(123, 'lecture2');

  lecture2.printIdType(); //int
}

class Lecture<T, X> {
  final T id; // id 값의 타입이 뭐가 될지 외부에서 인스턴스를 만들 때 선언할 수 있음
  final X name;

  Lecture(this.id, this.name);

  void printIdType() {
    print(id.runtimeType);
  }
}
