void main() {
  TimesTwo tt = TimesTwo(2);
  print(tt.calculate()); // 4

  TimesFour tf = TimesFour(2);
  print(tf.calculate()); // 8
}

class TimesTwo {
  final int number;

  TimesTwo(
    this.number,
  );

  //method
  int calculate() {
    return number * 2;
  }
}

class TimesFour extends TimesTwo {
  TimesFour(
    int number,
  ) : super(number);

  @override // 메소드 오버라이드
  int calculate() {
    return super.number * 4;
    //return super.calculate()*2;
  }
}
