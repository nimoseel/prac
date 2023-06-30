void main() {
  // list와 유사하지만 중복 값 들어갈 수 없음 !
  final Set<String> names = {
    'so',
    'mi',
    'dart',
    'so',
  };

  print(names); // {so, mi, dart} -> 중복된 so 값 하나만 출력

  names.add('something');
  print(names); // {so, mi, dart, something}

  names.remove('something');
  print(names); // {so, mi, dart}

  // 값이 있는지 확인
  print(names.contains('dart')); // true
}
