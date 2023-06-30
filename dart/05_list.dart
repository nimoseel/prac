void main() {
// 타입을 지켜야함
  List<String> aespa = ['카리나', '윈터', '닝닝', '지젤'];

  print(aespa[0]); // 제니
  print(aespa.length); // 4

  aespa.add('뉴비');
  print(aespa); //['제니','지수','로제','리사','뉴비']

  aespa.remove('뉴비');
  print(aespa); //['제니','지수','로제','리사']

  print(aespa.indexOf('로제')); //2
}
