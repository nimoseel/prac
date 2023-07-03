// static - 인스턴스에 귀속되지 않고 클래스에 귀속된다.
void main() {
  Employee som = Employee('솜');
  Employee min = Employee('민');

  som.name = '슈';
  som.printNameAndBuilding(); // 제 이름은 슈 입니다. null 건물에서 근무하고 있습니다.
  min.printNameAndBuilding(); // 제 이름은 민 입니다. null 건물에서 근무하고 있습니다.

// static은 class에 귀속되기 때문
  Employee.building = '롯데타워';
  som.printNameAndBuilding(); // 제 이름은 슈 입니다. 롯데타워 건물에서 근무하고 있습니다.
  min.printNameAndBuilding(); // 제 이름은 민 입니다. 롯데타워 건물에서 근무하고 있습니다.

// static method
  Employee.printBuilding(); // 저는 롯데타워 건물에서 근무 중입니다.
}

class Employee {
  // 근무지 static
  static String? building;
  // 근무자 // final로 설정하지 않았다면 추후에 근무자 이름 변경 가능
  String name;

  Employee(
    this.name,
  );

  void printNameAndBuilding() {
    print('제 이름은 $name 입니다. $building 건물에서 근무하고 있습니다.');
  }

// static method
  static void printBuilding() {
    print('저는 $building 건물에서 근무 중입니다.');
  }
}
