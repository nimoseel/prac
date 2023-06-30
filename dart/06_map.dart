void main() {
  Map<String, String> dictionary = {
    'Harry': '해리',
    'Ron': '론',
    'Hermione': '헤르미온느',
  };

  print(dictionary);
  // {Harry: 해리, Ron: 론, Hermione: 헤르미온느}

  Map<String, bool> isHarryPotter = {
    'Harry': true,
    'Ron': true,
    'Ironman': false,
  };

  isHarryPotter.addAll({
    'Spiderman': false,
  }); // 한번에 여러 key-value 추가 가능

  print(isHarryPotter);
  // {Harry: true, Ron: true, Ironman: false, Spiderman: false}

// 값 확인하기
  print(isHarryPotter['Ironman']); // false

// 값 변경하기
  isHarryPotter['Spiderman'] = true;
  print(isHarryPotter);
  // {Harry: true, Ron: true, Ironman: false, Spiderman: true}

// 값 삭제하기
  isHarryPotter.remove('Harry');
  print(isHarryPotter);
  // {Ron: true, Ironman: false, Spiderman: true}

// key, value 가져오기
  print(isHarryPotter.keys); // (Ron, Ironman, Spiderman)
  print(isHarryPotter.values); // (true, false, true)
}
