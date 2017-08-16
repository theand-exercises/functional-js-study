
// 함수형 커링: _curry
function _curry(fn){
    "use strict";
    return function (a){
        return function (b) {
            return fn(a, b);
        }
    }
}

// 4. 고차 함수의 응용
// - curry 소개 (curry, curryr 만들기)
// - [코딩] 'n빵' 함수 만들기
// - [코딩] go, pipe 만들기

function oneofn(n, total){
    "use strict";
    return total/n;
}

var oneof8 = _curry(oneofn)(8);

console.log( oneof8(1000));
