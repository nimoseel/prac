// infer 
// 입력한 타입을 변수로 만들어주는 키워드, 조건문 안에서만 사용 가능 
// 타입파라미터에서 타입을 추출하고 싶을 때 씀
type Name<T> = T extends infer R ? R : unknown;
type 새타입 = Name<string>
//
// array 안에 있는 타입 뽑아서 변수로 만들기
type 타입추출<T> = T extends (infer R)[] ? R : unknown; 
type NewType = 타입추출<boolean[]> // NewType 은 boolean 타입
//
// 함수의 return 타입 뽑아서 변수로 만들기
type 타입추출2<T> = T extends (()=> infer R) ? R : unknown; 
type NewType2 = 타입추출2<() => number> // NewType2은 number 타입
//
// 함수의 파라미터 타입 뽑아서 변수로 만들기
type 타입추출3<T> = T extends (x:infer R) => any ? R : any;
type a = 타입추출3<(x:string)=>void>
// type a = string