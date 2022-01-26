// 재선언 실습

var variableVar = "123";
var variableVar = "321";

console.log("variableVar", variableVar);

const variableConst = "123";
const variableConst = "321";

console.log("variableConst", variableConst)

// 재할당 실습

var variablAlloc = "123";
variableAlloc = "321";

console.log("variableAlloc", variableAlloc);


// 범위 실습

// 펑션 스코프 : 유호 범위가 함수 범위 내여서 밖으로 나가지 못함. 전역 함수 외부에서 생성한 변수는 전역 변수
// 블록 스코프 : 함수 스코프 대신 블록 스코프를 사용하여 호이스팅같은 문제를 해결할 수 있음

/* var은 function scope를 가져서 if문 안에 있어도 밖에서 접근 가능, const와 let은 Block Scope 범위를 가져서
선언된 값을 block 밖에서 접근 불가. */

function colorFunction () {
    if(true){
        var color = 'blue';  // undefined
        console.log(color)
    }
    console.log(color) // blue
}
colorFunction()
console.log(color)

// 호이스팅이란??
/* JavaScript에서 호이스팅(hoisting)이란, 인터프리터가 변수와 함수의 메모리 공간을 
선언 전에 미리 할당하는 것을 의미합니다. var로 선언한 변수의 경우 호이스팅 시 
undefined로 변수를 초기화합니다. 반면 let과 const로 선언한 변수의 경우 호이스팅 시 변수를 초기화하지 않습니다.
호이스팅을 설명할 땐 주로 "변수의 선언과 초기화를 분리한 후, 선언만 코드의 최상단으로 옮기는" 것으로 말하곤 합니다.
따라서 변수를 정의하는 코드보다 사용하는 코드가 앞서 등장할 수 있습니다. 
다만 선언과 초기화를 함께 수행하는 경우, 선언 코드까지 실행해야 변수가 초기화된 상태가 됨을 주의하세요. */

hoistFunction();

function hoistFunction(){
    console.log(x)
    var x = 'var';
    console.log(x)
}

/* 아래와 같이 해석된다
function hoistFunction() {
    var x;
    console.log(x);
    x = 'var';
    console.log(x);
}
함수 안에서 선언부를 가장 위로 끌어올려서 해석된다.*/

/* 자료형
원시 타입(Primitive Type)Number, String, Boolean, Null, Undefined, Symbol
객체 타입(Object Type) : Object
Number : 자바스크립의 숫자 타입은 단 하나, Number이다. 모든 수는 64bit 실수로 표현됨.
Strinfg : 문자열 자료형, (")와 (')를 동일하게 취급, ES6부터 백틱 문자열 'Template literal'을 지원
Symbol : 유일하고 변경할 수 없는 식별자를 만들고 싶을 때 사용
Null : 값이 정해지지 않은 것(타입은 있음), Object타입
Undefined : 타입이 정해지지 않은 것, 초기화되지 않은 변수나 존재하지 않는 값
*/

/* Object
자바스크립트의 기본 타입, {}로 감싸진 형태이다.
property의 정렬되지 않은 집합
Property는 key:value의 형태로 구성된다.
property가 함수일 경우 Method라고 부름
원시타입을 제외한 나머지는 모두 객체 -> function, array, regex 모두 객체
*/

const animal = {
    animalType: "dog",
    animatName: "뽀삐",
    animalFriends: ["코코", "초코", "쿠키"],
    bark: function () {
        HTMLFormControlsCollection.log(`${this.animalName}: 멍멍`);
    },
    thisFriends: function () {
        this.animalFriends.forEach(friend => {
            console.log(`${this.animalName}의 친구: ${friend}`);
        });
    },
};

/* Array
JS에선 array도 객체
배열 요소의 타입이 고정되어 있지 않음 -> 같은 배열에 있는 요소끼리 타입이 다를 수도 있음
배열 요소의 인덱스가 연속적이지 않아도 됨 -> 따라서 특정 배열 요소가 비어 있을 수도 있음
기본 형태 : arr = [elem1, elem2, elem3]
*/

// 예시
let arr = [2, 'some string', undefined];
let arr = Array(null, 4, {part: 'server'});

/* Function
JS에선 function도 객체!
하나의 고유한 목적의 작업을 수행하도록 설계된 독립적인 블록
자바스크립트의 함수는 "일급 객체"
- 변수, 데이터 구조에 담을 수 있다
- 다른 함수의 파라미터로 전달할 수 있다
- 반환 값으로 사용할 수 있다
*/

function someAwesomeFunction(parameters) {
    // 함수 본문
}
someAwesomeFunction