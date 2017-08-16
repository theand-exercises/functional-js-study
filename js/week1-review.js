var products = [
    {
        is_popular: true,
        name: "반팔티",
        price: 10000,
        sizes: [
            {name: "L", quantity: 2, price: 0},
            {name: "XL", quantity: 3, price: 0},
            {name: "2XL", quantity: 2, price: 2000}
        ]
    },
    {
        is_popular: false,
        name: "긴팔티",
        price: 31000,
        sizes: [
            {name: "L", quantity: 2, price: 0},
            {name: "XL", quantity: 3, price: 1000},
            {name: "2XL", quantity: 2, price: 2000}
        ]
    },
    {
        is_popular: true,
        name: "후드티",
        price: 21000,
        sizes: [
            {name: "L", quantity: 0, price: 0},
            {name: "XL", quantity: 5, price: 1000},
            {name: "2XL", quantity: 10, price: 2000}
        ]
    },
    {
        is_popular: false,
        name: "맨투맨",
        price: 16000,
        sizes: [
            {name: "L", quantity: 4, price: 0}
        ]
    },
    {
        is_popular: true,
        name: "기모후드티",
        price: 26000,
        sizes: [
            {name: "L", quantity: 3, price: -1000},
            {name: "2XL", quantity: 4, price: 2000}
        ]
    },
    {
        is_popular: false,
        name: "기모맨투맨",
        price: 21000,
        sizes: [
            {name: "M", quantity: 0, price: 0},
            {name: "L", quantity: 0, price: 0},
            {name: "XL", quantity: 0, price: 2000}
        ]
    }
];

// 1) dom에 모든 상품 이름 추가하기
var dom = ["에코백"];

_each(products, e => dom.push(e.name));

console.log(dom); // ["에코백", "반팔티", "긴팔티", "후드티", "맨투맨", "기모후드티", "기모맨투맨"]
console.log(_.isEqual(dom, ["에코백", "반팔티", "긴팔티", "후드티", "맨투맨", "기모후드티", "기모맨투맨"]));

// 2) 모든 상품 이름 배열 만들기
var product_names;
product_names = _map(products, e => e.name);
console.log(product_names); // ["반팔티", "긴팔티", "후드티", "맨투맨", "기모후드티", "기모맨투맨"]
console.log(_.isEqual(product_names, ["반팔티", "긴팔티", "후드티", "맨투맨", "기모후드티", "기모맨투맨"]));

// 3) 가격이 20000원 미만인 인기 상품 찾기
var popluar_under_20000_products;
var is_popular = e => e.is_popular === true;
var is_under_2000 = e => e.price < 20000;

popluar_under_20000_products = _filter(_filter(products, is_popular), is_under_2000);
console.log(popluar_under_20000_products);


// 4) 가격대별로 분류된 제품 목록 만들기
var grouped_products;


grouped_products = products.reduce( (pa, per_product) => {
    var group_price =  Math.round((per_product.price - (per_product.price%10000)) / 10000);
    var key = `${group_price}만원`;
    if( !pa[key] ) {
        pa[key] = [];
    }
    pa[key].push(per_product);
    return pa;
} , {});

console.log(grouped_products);


// 5) 제품명이 "후드티"인 제품의 가격 총합 (사이즈별 가격 변동 조건 포함)
var hood_product_total_price;
console.log(hood_product_total_price);

// 6) 가격이 2만원대인 제품 중에서 재고가 있는 제품 찾기
var special_product;
console.log(special_product);
