var products = [
    {
        is_selected: true, // <— 장바구니에서 체크 박스 선택
        name: "반팔티",
        price: 10000, // <— 기본 가격
        sizes: [ // <—— 장바구니에 담은 동일 상품의 사이즈 별 수량과 가격
            {name: "L", quantity: 2, price: 0},
            {name: "XL", quantity: 3, price: 0},
            {name: "2XL", quantity: 2, price: 2000}, // <—— 옵션의 추가 가격
        ]
    },
    {
        is_selected: true,
        name: "후드티",
        price: 21000,
        sizes: [
            {name: "L", quantity: 3, price: -1000},
            {name: "2XL", quantity: 1, price: 2000},
        ]
    },
    {
        is_selected: false,
        name: "맨투맨",
        price: 16000,
        sizes: [
            {name: "L", quantity: 4, price: 0}
        ]
    }
];

console.log('---- 컬렉션 테스트');
//1) 전체 수량 구하기
const countWholeProductFrom = (total_count, per_product) => {
    total_count += per_product.sizes.reduce((product_count, per_size) => product_count += per_size.quantity, 0);
    return total_count
};

console.log("Total count : ", products.reduce(countWholeProductFrom, 0));


//3) 선택된 전체 수량 구하기
const isSelected = per_product => per_product.is_selected;

console.log("Total selected count : ", products.filter(isSelected).reduce(countWholeProductFrom, 0));


console.log('---- each 만들기');
const arr = [1, 2, 3, 4];

console.log("native .forEach");
arr.forEach(e => console.log(e));

function _each(collection, callback) {
    for (var i = 0; i < collection.length; i++) {
        callback(collection[i], i, collection);
    }

}

console.log("own _each");
_each(arr, e => console.log(e));


console.log('---- map 만들기');

// const arr = [1,2,3,4];
console.log("native .map");
console.log(arr.map(v => v + 1));

function _map(collection, callback) {
    var result = [];
    for (var i = 0; i < collection.length; i++) {
        result.push(callback(collection[i]));
    }
    return result;
}

console.log("own _map");
console.log(_map(arr, v => v + 1));


console.log('---- filter 만들기');

// const arr = [1,2,3,4];
console.log("native .filter");
console.log(arr.filter(v => v % 2 == 0));

function _filter(collection, callback) {
    var result = [];
    for (var i = 0; i < collection.length; i++) {
        if (callback(collection[i])) {
            result.push(collection[i]);
        }
    }
    return result;
}

console.log("own _filter");
console.log(_filter(arr, v => v % 2 == 0));


console.log('---- reduce 만들기');

// const arr = [1,2,3,4];
console.log("native .reduce");
console.log(arr.reduce((s, v) => s += v, 0));

function _reduce(collection, callback, seed) {
    var result = seed;
    for (var i = 0; i < collection.length; i++) {
        result = callback(result, collection[i]);
    }
    return result;
}

console.log("own _reduce");
console.log(_reduce(arr, (s, v) => s += v, 0));


console.log('---- go 만들기');

function _go(seed, ...callback) {
    var result = seed;
    for (var i = 0; i < callback.length; i++) {
        result = callback[i](result);
    }
    return result;
}


console.log("own _go");
console.log(_go(10,
    v => v + 1,
    v => v * 2,
    v => v / 2,
    v => v - 1,
    v => v * 2));

console.log('---- go_with_reduce 만들기');

function _go_with_reduce(seed, ...callback) {
    return _reduce(callback, (s,v) => v(s), seed);
}


console.log("own _go_with_reduce");
console.log(_go_with_reduce(10,
    v => v + 1,
    v => v * 2,
    v => v / 2,
    v => v - 1,
    v => v * 2));
