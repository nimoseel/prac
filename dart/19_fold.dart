// reduce의 경우 실행하는 리스트 타입과 같은 타입을 리턴해야 실행할 수 있음
// fold는 리턴 타입을 일치시켜야하는 reduce의 단점을 보완, 리턴 타입을 설정할 수 있음

void main() {
  List<int> numbers = [1, 3, 5, 7, 9];

  final sum = numbers.fold<int>(0, (prev, next) => prev + next);
//   prev 첫번째 값이 1이 아닌 첫번째 파라미터의 값인 0으로 들어감
  print(sum); // 25

  List<String> words = ['안녕하세요 ', '저는 ', '솜입니다.']; // string 타입의 list
  final sentence = words.fold<String>('', (prev, next) => prev + next);
  print(sentence); // 안녕하세요 저는 솜입니다.

  final count =
      words.fold<int>(0, (prev, next) => prev + next.length); // int 리턴
  print(count); // 14
}
