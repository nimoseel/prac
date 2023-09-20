# Equatable 플러그인
- OOP에서 유용한 기능 제공
- 한 인스턴스와 다른 인스턴스가 같은 인스턴스인지 판단을 쉽게할 수 있게 해주는 플러그인
- Dart 언어에서는 operator== 함수에 인스턴스 비교 알고리즘이 정의되어 있고 이를 override 하여 설정할 수 있음.
- hashCode 는 Map 또는 Set에서 키 역할을 함. 키가 중복으로 저장될 수 없음.
- hashCode 함수에선 어떤 값을 기반으로 hashCode를 생성할 것인지 정의할 수 있음.


## 오브젝트는 서로 다른 메모리 주소를 가진다
```dart
class Person{
    final int id;
    final String name;
    final int age;

    Person({
        required this.id,
        required this.name,
        required this.age,
    });
}
```
Person 클래스를 이용해서 인스턴스를 만들고 해당 인스턴스를 다음과 같이 비교하면<br/>
각각의 인스턴스 내 값은 동일하지만 인스턴스는 다른 메모리 주소를 가지고 있기 때문에 <br/>
person1과 person2는 동일하지 않다는 것을 확인할 수 있다.  
```dart
final person1 = Person(id:1, name:'sue', age:20);
final person2 = Person(id:1, name:'sue', age:20);

print('${person1.id == person2.id}'); // true
print('${person1.name == person2.name}'); // true
print('${person1.age == person2.age}'); // true
print('${person1 == person2}'); // false - 각각의 인스턴스는 다른 메모리 주소를 가르키고 있기 때문
```
<br/>
<br/>

## equality 설정하기 
### 모든 값이 같아야 같은 오브젝트로 판단하고 싶다면
- 다른 오브젝트가 Person 오브젝트이고, id, name, age 값이 모두 같을 경우 같은 오브젝트라고 판단한다는 코드
- 똑같은 id, name, age 값을 가질 경우 같은 해쉬값을 리턴한다는 코드<br/>

를 override하여 인스턴스를 비교하면<br/>
두 인스턴스가 모두 Person 오브젝트의 인스턴스이고 id, name, age값이 동일하기 때문에<br/>
person1과 person2가 동일한 것으로 인식된다.
```dart
class Person{
    final int id;
    final String name;
    final int age;

    Person({
        required this.id,
        required this.name,
        required this.age,
    });

    @override
    bool operator == (Object other){
        return other is Person && 
            this.id == other.id &&
            this.name == other.name &&
            this.age == other.age;
    }

    @override
    int get hashCode{ // 똑같은 값을 가지고 있는 class들은 항상 같은 해쉬 값을 리턴해야함. 
        return this.id + this.name.hashCode + this.age;
    }
}

final person1 = Person(id:1, name:'sue', age:20);
final person2 = Person(id:1, name:'sue', age:20);

print('${person1.id == person2.id}'); // true
print('${person1.name == person2.name}'); // true
print('${person1.age == person2.age}'); // true
print('${person1 == person2}'); // true
```

<br/>

### id값만 같으면 같은 오브젝트로 판단하고 싶다면
equality 조건을 id 값만 주었을 경우 name, age 값이 다르더라도 id 값만 같다면 같은 오브젝트로 인식한다는 것을 확인할 수 있다.
```dart
class Person{
    final int id;
    final String name;
    final int age;

    Person({
        required this.id,
        required this.name,
        required this.age,
    });

    @override
    bool operator == (Object other){
        return other is Person && 
            this.id == other.id; // id만 같으면 같은 오브젝트로 본다
    }

    @override
    int get hashCode{
        return this.id;
    }
}

final person1 = Person(id:1, name:'sue', age:20);
final person2 = Person(id:1, name:'sumin', age:20); // 

print('${person1.id == person2.id}'); // true
print('${person1.name == person2.name}'); // false 
print('${person1.age == person2.age}'); // true
print('${person1 == person2}'); // true - name이 달라도 person1 == person2
```

<br/>

## Equatable를 사용하면 편하다
현재 파라미터가 id, name, age만 있지만, 만약 파라미터가 많은 클래스를 수십개 정의해야 한다면 @override 코드 쓰는 것이 힘들 것.<br/> 이를 자동화 해주는 것이 Equatable.
```dart
class Person extends Equatable{ // Equatable를 extends 한다.
    final int id;
    final String name;
    final int age;

    Person({
        required this.id,
        required this.name,
        required this.age,
    });

    @override // props 메서드를 기반으로 위에서 작성한 두개의 override 코드를 자동화해줌
    List<Object> get props => [this.id]; // 원하는 유니크 값 - id 값만 기반으로 클래스의 equality를 정하고 싶음
}

final person1 = Person(id:1, name:'sue', age:20);
final person2 = Person(id:1, name:'sumin', age:20);

print('${person1.id == person2.id}'); // true
print('${person1.name == person2.name}'); // false 
print('${person1.age == person2.age}'); // true
print('${person1 == person2}'); // true - name이 달라도 person1 == person2
```