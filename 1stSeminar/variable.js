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

