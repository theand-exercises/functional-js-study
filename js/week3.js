
var users = [
    { id: 1, name: 'ID', age: 36 },
    { id: 2, name: 'BJ', age: 32 },
    { id: 3, name: 'JM', age: 34 },
    { id: 4, name: 'PJ', age: 27 },
    { id: 5, name: 'HA', age: 25 },
    { id: 6, name: 'JE', age: 26 },
    { id: 7, name: 'JI', age: 31 },
    { id: 8, name: 'MP', age: 23 }
];


// 1. 30세 미만의 유저의 이름 목록

let usernames_under_30;

var is_under_30 = u => u.age < 30;

usernames_under_30 =
    _reduce( _filter(users, is_under_30),
        (acc, u) => {
            acc.push(u.name);
            return acc;
        }
        , []);
console.log(usernames_under_30);

// 2. 30세 이상의 유저의 id 목록

let useridss_over_30;

var is_over_30 = u => u.age > 30;
useridss_over_30 =
    _reduce( _filter(users, is_over_30),
        (acc, u) => {
            acc.push(u.id);
            return acc;
        }
        , []);
console.log(useridss_over_30);


// 3. 30세 미만의 유저들의 나이의 총합

let sum_of_ages_under_30;

sum_of_ages_under_30 =
    _reduce( _filter(users, is_under_30),
        (acc, u) => {
            acc += u.age
            return acc;
        }
        , 0);
console.log(sum_of_ages_under_30);



// 4. 이름이 'PJ'인 유저의 나이

let age_of_pj = _find(users, u => u.name === "PJ").age;
console.log(age_of_pj);


// 5. n빵 함수 : curryr을 사용


