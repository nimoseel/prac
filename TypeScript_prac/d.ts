export type Name  = string;
export type 계산함수 = (x: number, y:number) => number;
export interface Person { age : number} ;

//  타입만 저장할 수 있는 파일 , js로 컴파일 되지 않음
// d.ts 파일은 자동으로 글로벌 모듈이 되지 않음 -> typeRoots 속성 사용
// - 타입 정의만 따로 저장해 놓고 import 
// - 프로젝트에서 사용하는 타입을 정리해 놓는 레퍼런스용 
    // d.ts 파일을 레퍼런스용으로 사용하려면
    // tsconfig.json 파일에서 compilerOptions 에 declaration: true 설정 
    // index.ts 에 작성한 타입이 index.d.ts에 자동으로 정리되어 있음 

